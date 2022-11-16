// measured in seconds
export const UNIT = 'SECONDS';
// 4 hours = 14,400 seconds
// where did 4 hours come from?
// it's a highly approximate value that is based off of anecdotal evidence
// provided by a number of teams - Native clients (desktop and mobile)
// as well as the web client teams and direct experience
// it is an approximate average of the bare minimum of what it would take prior to token automation
// factors that this includes:
// 1. pulling from upstream
// 2. looking at figmas
// 3. some nominal back and forth with a designer
// 4. mapping values from figma correctly into the token file
// 5. opening a PR
// 6. Running a build
// 7. getting PR reviews
// 8. merging the PR
// 9. deploying the PR and getting a new token version
// 10. Assumes a small change, not a large change
export const ENGINEERING_BASE_TIME_MEASUREMENT = /* seconds */ 60 * /* minutes */ 60 * /* hours */ 4;
// 2 minutes = 120 seconds
// where did 2 minutes come from?
// it's a highly approximate value that is based off of anecdotal evidence provided by a number of teams
// as well as the web client teams and direct experience
// it is an approximate average of the per line change time that it takes to
// convert values from a figma to a representative token value in the tokens repository
// it also includes the additional time factor that we get by not having to hard code
// other tokens such as border-radius, spacing, etc
// this is factored based off of the concept that an engineer has to
// look at a figma and convert values from figma to the implementation
export const ENGINEERING_TIME_FACTOR = /* seconds */ 60 * /* minutes */ 2;
// Please refer to Trip Carrol to understand the design time savings here
export const DESIGN_BASE_TIME_MEASUREMENT = 0;
// Please refer to Trip Carrol to understand the design time savings here
export const DESIGN_TIME_FACTOR = /* seconds */ 60 * /* minutes */ 1;
// currently we are only focusing on the value provided by the tokens package
// so only provide metrics for this specific package, else return nothing
export const PACKAGE_FOCUS = ['@momentum-design/tokens'];

export const calculateApproximateValue = (packageName: string, lineChanges: number) => {
  if (PACKAGE_FOCUS.includes(packageName)) {
    const engineeringTimeValueInSeconds = ENGINEERING_BASE_TIME_MEASUREMENT + (lineChanges * ENGINEERING_TIME_FACTOR);
    const designTimeValueInSeconds = DESIGN_BASE_TIME_MEASUREMENT + (lineChanges * DESIGN_TIME_FACTOR);
    return {
      engineering: {
        seconds: engineeringTimeValueInSeconds,
      },
      design: {
        seconds: designTimeValueInSeconds,
      },
    };
  }
  return null;
};
