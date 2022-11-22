import { IGit, PullRequestFile, IPRConfig } from './types';

const Octokit = require("@octokit/core").Octokit;
const createPullRequest = require("octokit-plugin-create-pull-request").createPullRequest;
const MyOctokit = Octokit.plugin(createPullRequest);

export const sendPullRequest = (git: IGit, files: Record<string, PullRequestFile>, config:IPRConfig = { head:''}):Promise<any>=>{
    const octokit = new MyOctokit({
        auth: git.token, //""
        baseUrl: git.baseUrl || undefined // "https://sqbu-github.cisco.com/api/v3",
    });
    return octokit.createPullRequest({
        owner: git.owner,
        repo: git.repo,
        title: `${config.title || ''} - ${config.actor || 'admin'}@Momentum-automation-center`,
        body: `${config.body || ''} - Created By ${config.actor || 'admin'} from @Momentum-automation-center`,
        //base: "main" /* optional: defaults to default branch */,
        forceFork: true,
        createWhenEmpty: false,
        head: `${config.head}--${new Date().toISOString().replace(/\.|\:/g,'-')}`, // branch name
        changes: [
            {
                files: files,
                commit: config.commit || "automation commit ",
            }
        ],
    });
};