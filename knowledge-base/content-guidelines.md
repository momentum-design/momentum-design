---
title: Content guidelines
summary: Product UI/UX writing standards for products built with Momentum — voice, tone, style, accessibility, inclusion, vocabulary, content patterns, examples, and evaluation criteria for in-product copy.
tier: 1
---

**Primary audience:** Product design and engineering.

## Purpose and scope

In-product content connects people and transforms how they communicate and collaborate. In product UI, our voice is human — welcoming, grounded, empathetic, and enthusiastic — while tone adapts to the moment.

This guide covers:

- Voice and tone principles for in-product copy
- Style mechanics (capitalization, punctuation, emphasis, formats, emojis)
- Accessibility, inclusion, and localization
- Vocabulary and terminology
- Reusable content patterns and before/after examples
- Evaluation criteria

Product teams should prioritize **Spirited**, **Diligent**, and **Thoughtful** in UI/UX copy.

## Voice

### Voice vs tone

**Voice isn't what we write. It's how we write.**

Voice is the consistent character across products. Tone is delivery — how that character adapts to context and situation.

### Product characteristics

Dial up these three in UI/UX copy:

| Characteristic | Description | TL;DR |
| --- | --- | --- |
| **Spirited** | Enthusiastic. Energetic. Positive. Our voice is never static. Sure, we’re a touchstone for industry knowledge and innovation, but that doesn’t mean we can’t have a laugh. We tell uplifting stories with relatable examples and wry humor. We’re excited about what we do and share that spirit. | If the moment is exciting, share it. Use dynamic language. Sneak in wry humor if it feels right. **Write with passion.** |
| **Diligent** | We speak with intention; every word serves a purpose. We’re consistent with terms and use research to make informed choices. Our language is clear and actionable, informative without being verbose. We know the stakes, so our approach is never careless. | Make every word count. Ensure users don't get lost. Use clear, actionable language. **Write with intention.** |
| **Thoughtful** | We listen and learn. Customer needs and goals are a priority, and we strive to create an effortless experience. This means our voice is thoughtful, understanding, and inclusive. Our audience is global and diverse, so we use plain, everyday language, sticking to simple concepts and descriptions. | Use everyday words. Think about next steps. **Write like chatting with a friend.** |

### Voice contrasts

Our voice is:

- **Confident** but not condescending
- **Intelligent** but not erudite
- **Wry** and **cheeky** but never goofy or obnoxious
- **Empathetic** rather than emotional
- **Straightforward** but not without personality
- **Informative** but not rambling
- **Enthusiastic** but not bubbly

### Writing rules

1. **Vary sentence structure** — Mix short and long sentences; avoid monotonous rhythm.
2. **Choose active voice** — "The dog took the ball" not "The ball was taken by the dog."
3. **Simplify** — Cut filler ruthlessly. Kill your darlings.
4. **Remove jargon** — When you're part of an industry, it's easy to forget not everyone understands, or cares about, the jargon you use daily. The best writing is understandable to anyone. No matter the topic, there's almost always a simpler way to say it—find it.
5. **Think about story** — Even when writing a few sentences, think about the journey you're taking readers on. Strive to build arcs. Does where you land make sense considering where you took off? Writing toward a bigger picture or story will make your copy easier to digest.
6. **Mobile-first content thinking** — Just like mobile-first design, content should also be crafted with small screens in mind. Designing content for smaller screens first encourages removing anything unnecessary, making the experience cleaner, simpler, and easier to navigate.

## Tone

### Tone is all about delivery

While our voice is unchanging, our tone changes across the experience. It adapts to the context and the situation—to the moment. So imagine throwing confetti during a complete system failure...*Your system is broken. All is lost 🎉*... or greeting new users with one-word responses... *Sup*... Doesn't quite feel right.

And since we're not mind readers, pinpointing a user's emotional state is a wild goose chase. Instead, it's best to think deeply about what's happening around them. Is the moment sensitive? Speak with an extra bit of compassion (that's being thoughtful) and precision (that's being diligent).

**It's more art than science.**

### Moment matrix

Every message contains all characteristics, but delivery shifts by context. Use the moment to decide which to dial up.

| Product moment | Message delivery | Spirited | Diligent | Thoughtful | Example |
| --- | --- | --- | --- | --- | --- |
| **Impression** | Enthusiastic, clear, welcoming | High | Low | Medium | Hi there. So great you're here. We'll do some amazing work together! |
| **Crisis** | Positive, direct, understanding | Low | High | Medium–high | Your trial ends **Nov 14, 2023**. After that, you'll switch to a monthly subscription, but no worries, you can easily cancel or make changes anytime. |
| **Instructional** | Exciting, simple, conversational | Medium | High | Medium–high | Copy the link to share your Registration page, or click **Continue** if you're not ready to spread the word just yet. |
| **Achievement** | Vibrant, open, supportive | Medium–high | Medium | Medium–high | Great job! Over 80% of your users met your goal. Ready to take it up a notch? |

### Tone is more than words

Use illustration, color, type, sound, animation, and flow to convey tone — not words alone.

#### Not us

- **CPU overheating. Meeting performance has slowed.**
- To ensure a smooth experience, please close any background applications that are not essential for your meeting.

#### This is us

- **Your computer's working overtime**
- Close unneeded apps to keep your meeting running smoothly.

### Empty state tone

Two approaches, depending on need:

| Type | When to use | Dial up | Guidance |
| --- | --- | --- | --- |
| **Informative** | Most often | Diligent, empathetic | Avoid negatives ("No…" or "You don't have…"). Use descriptive headers. Explain the screen simply, like to a friend. Offer guidance or actions when possible. |
| **Timely** | Occasionally | Spirited, always improving | When guidance isn't needed, create encouragement or excitement. Headers can be more abstract and punchy. Always tie back to the user's context. |

## Style mechanics

### Capitalization

**Sentence case** is the default casing for all products and platforms (Desktop, Mobile, Web, Room). Capitalize only the first word and proper nouns.

**Exception:** When using native Apple components, follow Apple capitalization standards, which use sentence, title, and all caps casing.

**Note:** With Material 3, Android has moved to all sentence case. Android components will reflect this change as they get updated.

### Punctuation

#### Periods

- **Do:** use periods at the end of full sentences in banner text, body text, linked text, URLs, errors, dialogs, tooltips, and field labels.

- **Don't:** use periods in titles, headers, subtitles, subheaders, bullet points, checkboxes, radio buttons, hint text, or any text that is not a full sentence.

#### Ellipses

- **Do:** use ellipses to indicate in-process states, truncate when space is limited, or show that a menu option opens further choices (only when the copy does not include a verb).

- **Don't:** use ellipses in tooltips, buttons, hyperlinks, or menu options that take immediate action.

#### Exclamation points

Use sparingly — **one per flow**. Appropriate for onboarding and updates. Avoid in error messages, tooltips, and alerts.

#### Apostrophes

- **Do:** use for possession.
- **Don't:** use for plurality (e.g. "API's"). Contractions are encouraged — they sound friendly and informal.

#### Commas

Use commas in body-copy lists. For lists of three or more items, use the serial (Oxford) comma. If a sentence needs too many commas, split it into shorter sentences.

#### Colons

Use colons to format time, introduce lists of items or steps, and label elements (`Contact info: +xxx-xxx-xxx`). Capitalize the word after a colon in a list on a separate line; in running sentences, capitalize only proper nouns after the colon.

### Emphasis

Emphasis uses formatting and type symbols to add personality and clarity.

#### Bold

- **Do:** highlight key points and refer to labels or directions without quotation marks.
- **Don't:** overuse bold or rely on bold alone to convey meaning — the message must be clear without it.

### Emojis

Emojis are small, digital expressions representing many things, including objects, people, actions, and ideas. Emojis are now a widely recognized aspect of digital language. When used correctly, they can:

- Support message meaning
- Set a playful tone
- Be enjoyable to users

In product UI, use emojis deliberately, intentionally, and sparingly. An emoji's tone and meaning are always changing and subjective, so use them wisely. Your words should do the talking. Emojis are just visual aids.

#### When to consider an emoji

Well, it really depends on the context and moment your message is in. Emojis immediately make messages more playful, even quirky. Using an emoji should be a last resort to enhance a message.

A situation where an emoji may be appropriate to consider is if the tone of voice is **Spirited**. Use Spirited voice only when the moment and tone is celebratory, like in:

- Onboarding
- New feature or product announcements
- Successes or accomplishments

Before using an emoji, confirm you can firmly answer **yes** to all of the following:

- Does the situation call for a Spirited tone — is it uplifting and celebratory?
- Does the situation limit the use of other expressive brand elements like illustration, icons, or more descriptive writing?
- Will the clarity and meaning of the message be enhanced with an emoji?

If yes to all, you're in emoji territory. Follow the rules below.

#### Emoji rules

1. **Use emojis in headlines only** — Never in descriptive text or buttons. Place emojis at the end of the headline.
   - **Do:** Your calendar is completely free 🎉
   - **Don't:** 🎉 Your calendar is completely free
2. **Don't use punctuation with emojis** — The emoji is your punctuation.
3. **Never use emojis to replace words** — This will make your message inaccessible for everyone.
   - **Don't:** Your 📆 is completely free
4. **Use only popular and widely accepted emojis** — Emojis can have multiple meanings depending on culture, region, and age. Examples: 🙏 = High-five (in the US) or Prayer (in India); 💩 = Being silly or sarcastic (in the US) or Good luck (in Japan). See recommended emojis below.
5. **Don't use repeated or multiple emojis** — Using more than one emoji repeatedly can be tedious to people using a screen reader.
   - **Don't:** File uploaded 👏👏👏 (Screen reader: File uploaded clapping hands clapping hands clapping hands)
6. **Use emojis that work in dark and light mode** — Use the default yellow skin tone for people and hands.
   - **Do:** 👋
   - **Don't:** 👋🏻👋🏼👋🏽👋🏾👋🏿
7. **Don't use emojis if another visual element is used** — If there are icons or illustration being used in the same message, don't use an emoji.
8. **Use emojis, never emoticons** — Emojis have built-in alt text descriptions and can be read as text by a screen reader. Emoticons are punctuation and will be read out as punctuation.
   - **Do:** 😎
   - **Don't:** 8-)

#### Recommended emojis

You're not limited to these emojis, but these are commonly understood and play well with our Spirited tone of voice:

| Emoji | Name |
| --- | --- |
| 👍 | Thumbs up |
| 🙌 | Hands raised (Celebration) |
| 👋 | Waving hand |
| 👏 | Clapping hands |
| 💪 | Flexed bicep |
| 😄 | Grinning face |
| 🤩 | Face with starry eyes |
| 🥳 | Party face |
| 🫅 | Person with crown |
| 🦸 | Superhero |
| ❤️ | Heart |
| 🎁 | Present |
| 🎉 | Party popper |
| 🏆 | Trophy |
| 🔮 | Crystal ball |

### Formats

#### Date and time

| Type | Format | Example |
| --- | --- | --- |
| Date (full) | Day, Month DD, YYYY at HH:MM:SS XM | Tuesday, May 15, 2023, at 10:22:13 AM |
| Date (constrained) | 3-character month abbreviation | Mar 15, 2023 |
| Date (very constrained) | MM/DD/YY | 12/25/21 |
| Time (12-hour) | H:MM XM | 7:20 AM |
| Time (24-hour) | HH:MM | 07:20 |
| Duration (≤24h) | HH:MM:SS | 01:15:30 |
| Duration (>24h) | Xh Xm Xs | 135h 28m 15s |
| Duration (labels) | X seconds; X min X sec | 13 seconds; 20 min 11 sec |

#### Numbers and ranges

- Use en dashes for ranges: `10 AM – 11 AM`
- No leading zeros; never spell out standalone numbers
- Use commas in large numbers: `8,888,000`
- Phone (international): `+XX-XXX-XXX-XXXX`
- Phone (US): `(XXX) XXX-XXXX`

#### Menu paths

Embed paths in a sentence when possible. Use `>` as the separator.

Example: Go to Settings > Preferences > Personal Room > Host PIN

## Accessibility and inclusion

### Writing for accessibility

Language is an extremely powerful way to promote inclusivity. We write for a diverse audience that interacts with our content in different ways. We aim to make our content accessible to anyone using a screen reader, keyboard navigation, Braille interface, and users of all cognitive capabilities.

As you write, think about the following:

- Does this language make sense to someone who doesn't work here?
- Can someone quickly scan this and understand the material?
- If someone can't see the colors, images, or video, is the message still clear?

Always try to write from more than one perspective and limit assumptions or biases. If you can't think of an alternate term, find another way to write what you want to say.

### Best practices

- Use neutral, precise, relevant descriptions — include personal qualities only when essential.
- Choose words carefully; beware of historical significance and appropriation from marginalized communities.
- Avoid terms that assign value to racial characteristics (e.g. "dark pattern"). Color terms like "dark mode" or "light theme" are acceptable when they refer to brightness, not value.
- Avoid proxy statements and stereotypes. Communicate from equality and consider worst-case interpretation.

### Readability

**Target: 5th to 8th grade reading level.** Simple copy helps all users and makes localization easier. More than 20% of US residents don't speak English at home.

- Write short sentences. Avoid unnecessary adverbs and adjectives.
- Use simple verb tenses and active voice.
- Prefer common words: Buy over Purchase, Help over Assist, Like over Such as.

### Writing about disabilities

Avoid ableist language — including metaphors and euphemisms (e.g. "fall on deaf ears"). Center the person, not the ability.

### Writing about gender

Avoid gendered assumptions and stereotypes. When gender-neutral phrasing is possible, use it — even if slightly longer. Prefer **you** over third-person **she/he**. If gender must be referenced, choose the most understandable expression.

### Terms to avoid

This list is not exhaustive. When uncertain, choose the inclusive alternative.

| Avoid | Use instead |
| --- | --- |
| Differently abled; the disabled | Disabled person; person with disabilities |
| Tone-deaf | Inconsiderate |
| Dummy | Placeholder |
| Whitelist | Allowlist |
| Blacklist | Blocklist |
| Master or slave | Primary / main or secondary |
| Native | Operating system or built-in |
| Businessman | Businessperson |
| What are your preferred pronouns? | What are your pronouns? |
| Other (as a gender option) | Prefer to self-describe; Prefer not to respond |

### Tips when writing

1. **Links** — Describe what the link does.
   - **This is us** For the best experience, download our desktop app.
   - **Not us** Our desktop app provides the best experience. Learn more.
2. **Front-loading** — Put essential information first.
   - **This is us** To annotate, tap the pencil icon.
   - **Not us** Tap the pencil icon to begin annotating.
3. **Directional language** — Avoid location-dependent wording.
   - **This is us** Select from these options.
   - **Not us** Select from the options below.
4. **Plain language**
   - **This is us** The password you entered is incorrect.
   - **Not us** Credentials you provided can't be determined to be authentic.
5. **Button labels** — Describe the action.
   - **This is us** Send logs
   - **Not us** Submit
6. **Logical order**
   - **This is us** Search bar → Search tips → Search results
   - **Not us** Search bar → Search results → Search tips
7. **Concise permission copy**
   - **This is us** The app uses ultrasound to pair with nearby devices. Allow access to your microphone?
   - **Not us** Long technical explanation before the ask.
8. **Form labels before fields**
   - **This is us** Password required → [Input field]
   - **Not us** [Input field] → Password required

## Localization

Products are localized into 20+ languages. Write for a global audience and for non-native English speakers.

### Tips when writing

1. Include articles when space allows (a, the, this, that).
2. Write in the active voice.
3. Be careful with words that have multiple meanings (has, right, left).
4. Use descriptive labels and feature names.
5. Use descriptive subjects — avoid **this**, **it**, and **that** after a specific subject.
6. Don't rely on idioms, metaphors, slang, humor, cultural references, or uncommon foreign words for critical information.
7. Don't use unnecessary abbreviations (e.g., e.g., i.e., etc.).
8. Don't embed text within images.
9. Don't create sentences that depend on UI element placement.
10. Plan for text expansion — English often expands 20–30% in German or Russian.

## Vocabulary

### Preferred terms

| Use | Not | Context |
| --- | --- | --- |
| Sign in | Log in | Authentication |
| Select | Choose | UI controls |
| There aren't any [items] | No [items] | Empty states |
| Do you want to continue? | Are you sure | Confirmations |
| Enter your email to continue | Oops | Error recovery |

### Prohibited or discouraged terms

| Avoid | Reason | Use instead |
| --- | --- | --- |
| Please | Implies the system is asking a favour | Avoid; rare exceptions for high-effort actions |
| Sorry | Focus on moving forward | State what happened and next step |
| No | Negative, stark | Reframe positively ("There aren't any drafts") |
| Oops | Too casual for errors | Direct, actionable message |
| Are you sure | Vague, repetitive | Specific confirmation title + consequence |

### Please, sorry, and no

#### Please

We try to avoid using "please" as it's often unnecessary and can be annoying to users if used often. Only consider using it if you're asking a user to do an action that requires significant effort or time.

#### Sorry

We don't use the word "sorry" in any of our product writing.

Saying sorry can seem insincere to users or imply we're to blame for a problem. It's not really important who is to blame. Instead, to align closer to our voice, we try to move the user forward with language and experience.

#### No

We don't use the word "no" in any of our product writing. Write around it.

#### Writing for empty states

Sometimes, there may not be much to say or share. You often see empty states with "No new messages" or something similar.

- Instead of saying "No BLANK" say: "There aren't any BLANK" or "You can find BLANK here" or something similar.
- Consider using this moment to play with language or highlight our voice. Like instead of "No meetings" say "Meetings free" or "The day is yours." Use your best judgement.

### Pronouns and determiners

| Pronoun | Usage |
| --- | --- |
| **I, me** | Sometimes in buttons ("I agree") |
| **You** | When speaking directly to the user |
| **We, us** | When the product is speaking |
| **My** | User-owned feature names (e.g. "My Personal Room") — capitalize per product terminology |
| **Articles** | Use in longer messages; omit in buttons/CTAs when meaning is obvious ("Upload file" not "Upload the file") |

### Terminology glossary

| Term | Definition | Usage notes |
| --- | --- | --- |
| Space | A persistent collaboration area for a team, project, or topic | Capitalize when referring to the product feature; use specific name in delete confirmations ("Delete Spring Campaign") |
| Meeting | A scheduled or ad hoc audio/video session | Prefer "meet" as verb in casual copy ("meet face-to-face") |
| Personal Room | A user's persistent meeting room | Always capitalize; use "My Personal Room" in navigation paths |
| Studio | Studio product or feature context | Use in status/sign-off copy when contextually appropriate |
| App name | The client application | Prefer "[App name] would like to…" over "[App name] Needs to…" for permissions |

## Content patterns

### Button labels

- **Format:** Verb + noun when the noun adds clarity
- **Case:** Sentence case
- **Length:** Aim for 25 characters or fewer when possible
- **Examples:** Save changes, Create project, Delete, Cancel, Continue, I agree

### Error messages

- **Format:** What happened + what to do next
- **Tone:** Crisis moment — positive, direct, understanding. No exclamation points.
- **Example:** You don't have access to this page. Ask your admin for permission.

### Empty states

- **Format:** Descriptive header + brief purpose or encouragement + optional action
- **Tone:** Informative (most) or Timely (occasional). Avoid "No [thing]."
- **Example:** Spaces — *When you start or join a space, it'll appear here. Spaces are great for collaborating on specific topics or projects.*

### Confirmation dialogs

- **Title:** Name the specific item or action ("Delete Spring Campaign" not "Delete space?")
- **Body:** State the consequence plainly; use contractions; avoid asking the same question twice
- **Example:** Once deleted, all content and history in this space will be gone forever.

### Permission prompts

- **Title:** Inviting, not commanding ("[App name] would like to access your camera")
- **Body:** Benefit-led, warm ("This is so you can show your smiling face in meetings.")

### Status and system messages

- **Format:** Personal, plain language + optional peppy sign-off
- **Example:** Your network strength and CPU are doing great. Enjoy the Studio!

### Multi-step flows

- **Format:** Set honest expectations upfront; acknowledge friction with warmth
- **Example:** Connecting %App% to your account may take a few steps — *Depending on the platform, a code might need to be entered multiple times. Usually, it's just once. Don't worry, we'll guide you through every step.*

### Onboarding

- **Tone:** Dial up Spirited and Diligent
- **Format:** Descriptive headers + benefit-led body + clear next action
- **Examples:** "Stay close with your team", "Be ready before the curtain rises", "A space for all your magic"

### Alerts and in-meeting notifications

- **Tone:** Dial up always improving and empathetic
- **Format:** Explain what's happening onscreen and what the product is doing to help — conversational, short, and direct

### Dialogs

- **Tone:** Dial up Diligent and empathetic
- **Format:** Descriptive headers; explain purpose simply, like to a friend; offer guidance or actions when possible

### Tooltips and helper text

- Brief, instructional tone
- Use periods on full-sentence tooltips
- No ellipses in tooltips

### Placeholder text

- Never use: Lorem ipsum, Sample text, Placeholder, TODO copy
- Write real, on-brand copy that serves the user

## Examples in action

These examples show how to dial up voice principles and adapt tone across the user journey.

### High CPU usage

| | Not us | This is us |
| --- | --- | --- |
| **Copy** | CPU overheating. Meeting performance has slowed. | **Your computer's working overtime** — Close unneeded apps to keep your meeting running smoothly. |
| **Why?** | Clinical and system-centric. | Uses metaphor, explains the issue, and gives a clear next step. Dials up Spirited, Empathetic. |

### In-meeting video off

| | Not us | This is us |
| --- | --- | --- |
| **Copy** | Video disconnected due to poor network signal. | **Weak internet connection** — We shut off videos to keep you in the meeting. Other folks are still here. |
| **Why?** | Technical and detached. | Explains what's happening and what we did to help. Conversational phrases like "shut off" and "folks" (use sparingly). Dials up Diligent, Empathetic. |

### In-meeting video quality lowered

| | Not us | This is us |
| --- | --- | --- |
| **Copy** | Video quality lost due to poor network signal. | **Weak internet connection** — We lowered video quality to keep you in the meeting. |
| **Why?** | Jargon-heavy. | Plain language, short, and reassuring. Dials up Diligent, Empathetic. |

### Spaces empty state

| | Not us | This is us |
| --- | --- | --- |
| **Copy** | **No spaces** — You don't have any spaces. Use the plus button to create a space. | **Spaces** — When you start or join a space, it'll appear here. Spaces are great for collaborating on specific topics or projects. |
| **Why?** | Negative header and tone. | Descriptive, conversational, and helpful. Dials up Spirited, Diligent. |

### Drafts empty state

| | Not us | This is us |
| --- | --- | --- |
| **Copy** | No drafts — *Come here to find all your draft messages. You can start composing your thoughts here, and they'll be saved as drafts for later.* | Drafts — *This is where your unfinished messages await their finishing touch.* |
| **Why?** | Uses negative "No." Bland and obvious. Passive voice ("be saved"). Sounds copied from another app. | Avoids negative language. Wondrous, helpful tone. "Await the finishing touch" adds whimsy. Clear and encourages action. |

### Delete space confirmation

| | Not us | This is us |
| --- | --- | --- |
| **Copy** | **Delete space?** — *Deleting a space will erase all data. This can not be undo. Are you sure you want to delete this space?* | **Delete Spring Campaign** — *Once deleted, all content and history in this space will be gone forever.* |
| **Why?** | Lacks energy and clarity. Wordy, repetitive. No contractions — formal and harsh. Passive and weak. Ambiguous buttons. | Direct, specific title. Plain consequence. "Gone forever" adds wry humor while communicating permanence. |

### Network status

| | Not us | This is us |
| --- | --- | --- |
| **Copy** | *Network strength and CPU usage are within acceptable operating parameters.* | *Your network strength and CPU are doing great. Enjoy the Studio!* |
| **Why?** | Cold, clinical. Wordy, complex. "Acceptable" isn't reassuring. | Upbeat, personal. Simple wording. Peppy sign-off reduces worry. |

### Camera permission

| | Not us | This is us |
| --- | --- | --- |
| **Copy** | [App Name] Needs to Access Your Camera — *Make your camera available so you can meet face-to-face.* | [App Name] would like to access your camera — *This is so you can show your smiling face in meetings.* |
| **Why?** | Generic, command-like. Lacks engaging language. Unclear buttons. | Inviting tone. Benefit-led. Warm personality ("smiling face"). Clearer actions. |

### Account connect

| | Not us | This is us |
| --- | --- | --- |
| **Copy** | Connect %App% account with [App Name] — *Want connect your %App% account to [App Name] in just three simple steps?* | Connecting %App% to [App Name] may take a few steps — *Depending on the platform, a code might need to be entered multiple times. Usually, it's just once. Don't worry, we'll guide you through every step.* |
| **Why?** | Generic, oversimplified ("just three simple steps"). Redundant. Hides technical limitations. | Conversational, empathetic. Sets honest expectations. Acknowledges friction with warmth. |

## Evaluation checklist

Before shipping any user-facing copy, verify:

- [ ] **Message alignment** — Matches intended message, context, and goal
- [ ] **User enablement** — Helps user move to next step or complete a task
- [ ] **Accuracy** — All facts and logic correct
- [ ] **Spelling and grammar** — No errors
- [ ] **Simplicity** — No jargon; simple, clear language
- [ ] **Voice characteristics** — Spirited (dynamic, subtle humor), Diligent (precise, intentional), Thoughtful (inclusive, empathetic)
- [ ] **Moment fit** — Tone matches Impression, Crisis, Instructional, or Achievement context
- [ ] **Accessibility and inclusion** — Plain language, inclusive terms, no directional-only instructions
- [ ] **Localization readiness** — Active voice, no idioms or unnecessary abbreviations; room for expansion
- [ ] **Forward momentum** — Always provide a next step; no dead ends
- [ ] **Style alignment** — Sentence case, correct date/time formats, punctuation rules
- [ ] **No placeholder copy** — Never Lorem ipsum, Sample text, Placeholder, or TODO copy
