---
title: Content guidelines
summary: Webex product UI/UX writing standards — voice, tone, style mechanics, vocabulary, content patterns, examples, and evaluation criteria for in-product copy.
tier: 1
---

Product UI/UX writing standards for the Webex product suite.

**Primary audience:** Product design and engineering (UI/UX row in the platform spectrum).

**Figma source (internal):** `Cisco` → `Webex Suite Apps` → `_Momentum Design System` → `04 - ✍️ Content Design` (org-private; no URL).

## Purpose and scope

Webex content connects people and transforms how they communicate and collaborate. In product UI, our voice is always human — welcoming, grounded, empathetic, and enthusiastic — while tone adapts to the moment.

This guide covers:

- Voice and tone principles for in-product copy
- Style mechanics (capitalization, punctuation, formats)
- Vocabulary and terminology
- Reusable content patterns (buttons, errors, empty states, dialogs, permissions)
- Examples and evaluation criteria

For brand marketing copy (ads, social, PR), see the full brand spectrum in the Tone section. Product teams should prioritize **Spirited**, **Diligent**, and **Thoughtful** — not Visionary.

## Voice

### Voice vs tone

**Voice isn't what we write. It's how we write.**

Voice is the consistent character across products. Tone is delivery — how that character adapts to context and situation.

### Brand narrative

Webex is a new form of connection — the essential link between teams, offices, students, classrooms, businesses, and customers. We don't just connect people; we transform how they communicate and work together. We speak with authority because we have the information, and inclusively because everyone deserves a chance to connect and collaborate.

### Core attributes

Human, welcoming, grounded, empathetic, enthusiastic.

### Product characteristics

Dial up these three in UI/UX copy:

| Characteristic | Description | TL;DR |
| --- | --- | --- |
| **Spirited** | Enthusiastic, energetic, positive. Uplifting stories with relatable examples and wry humor. | If the moment is exciting, share it. Use dynamic language. Sneak in wry humor if it feels right. **Write with passion.** |
| **Diligent** | Intentional, consistent terms, research-informed. Clear, actionable, informative — never careless. | Make every word count. Ensure users don't get lost. Use clear, actionable language. **Write with intention.** |
| **Thoughtful** | Listens, learns, prioritizes customer needs. Plain, everyday language for a global audience. | Use everyday words. Think about next steps. **Write like chatting with a friend.** |

### Voice contrasts

Our voice is:

- **Confident** but not condescending
- **Intelligent** but not erudite
- **Wry** and **cheeky** but never goofy or obnoxious
- **Empathetic** rather than emotional
- **Straightforward** but not without personality
- **Informative** but not rambling
- **Enthusiastic** but not bubbly

## Tone

### Tone is all about delivery

While voice is unchanging, tone adapts to context and situation — to the moment. Don't throw confetti during a system failure, and don't greet new users with one-word responses.

We can't read users' emotional states. Instead, think about what's happening around them. Sensitive moment? Add compassion (thoughtful) and precision (diligent).

**It's more art than science.**

### Moment matrix

Every message contains all characteristics, but delivery shifts by context. Use the moment to decide which to dial up.

| Product moment | Message delivery | Spirited | Diligent | Thoughtful | Example |
| --- | --- | --- | --- | --- | --- |
| **Impression** | Enthusiastic, clear, welcoming | High | Low | Medium | Hi there. So great you're here. We'll do some amazing work together! |
| **Crisis** | Positive, direct, understanding | Low | High | Medium–high | Hey Barbara! Your Webex Meet Plan 30-day trial ends **Nov 14, 2023**. Time flies! After that, you'll switch to a monthly subscription, but no worries, you can easily cancel or make changes anytime. |
| **Instructional** | Exciting, simple, conversational | Medium | High | Medium–high | Copy the link to share your Registration page, or click **Continue** if you're not ready to spread the word just yet. |
| **Achievement** | Vibrant, open, supportive | Medium–high | Medium | Medium–high | Great job! Over 80% of your users met your goal. Ready to take it up a notch? Edit your meeting minutes goal and increase your daily video collaboration. |

### Platform spectrum

Brand voice always incorporates the same characteristics; tone shifts by platform. For product UI/UX, amplify **Spirited**, **Diligent**, and **Thoughtful**.

| Platform | Spirited | Diligent | Visionary | Thoughtful |
| --- | :---: | :---: | :---: | :---: |
| Ad copy | ● | | ● | |
| Web | | ● | ● | ● |
| Social media | ● | | | ● |
| Email | ● | ● | ● | ● |
| Video | ● | | ● | |
| Blogs | | ● | ● | ● |
| **UI/UX** | ● | ● | | ● |
| Product messaging | | ● | ● | |
| PR | | ● | ● | ● |
| Customer support | | ● | ● | ● |
| Events | ● | ● | ● | ● |
| Exec comms | | ● | ● | ● |
| Internal comms | ● | ● | ● | ● |

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
| **Timely** | Occasionally | Spirited | When guidance isn't needed, create encouragement or excitement. Headers can be more abstract and punchy. Always tie back to the user's context. |

## Style mechanics

### Writing rules

1. **Vary sentence structure** — Mix short and long sentences; avoid monotonous rhythm.
2. **Choose active voice** — "The dog took the ball" not "The ball was taken by the dog."
3. **Simplify** — Cut filler ruthlessly. Kill your darlings.
4. **Remove jargon** — Write so anyone can understand.
5. **Think about story** — Build arcs; land where you took off.
6. **Mobile-first** — Craft for small screens first; remove what's unnecessary.

### Capitalization

Use **sentence case** across all platforms. Capitalize only the first word and proper nouns.

### Punctuation

| Element | Do | Don't |
| --- | --- | --- |
| Periods | End full sentences in body text, errors, dialogs | Titles, headers, bullet points, checkboxes, hint text, tooltips (hover-only) |
| Ellipses | In-process states, truncation, menu options for further choices | Tooltips, buttons, hyperlinks |
| Exclamation points | Sparingly — one per flow; onboarding, updates | Error messages, tooltips, alerts |
| Apostrophes | Possession, contractions | Plurality (e.g. "API's") |
| Em dash | — | Do not use |

### Formats

| Type | Format | Example |
| --- | --- | --- |
| Date | Day, Month DD, YYYY at HH:MM:SS XM | Tuesday, May 15, 2023, at 10:22:13 AM |
| Time | H:MM XM | 7:20 AM |
| Numbers | No leading zeros; commas for large numbers | 50 unread messages; 8,888,000 |
| Phone (international) | +XX-XXX-XXX-XXXX | |
| Phone (US) | (XXX) XXX-XXXX | |
| Menu paths | `>` separator | Go to My Webex > Preferences > My Personal Room |

### Accessibility and inclusivity

- Write for diverse audiences (screen readers, keyboard, Braille, cognitive)
- Use plain language; avoid jargon
- Avoid directional language ("below," "above")
- Describe what buttons do ("Send logs" not "Submit")
- Provide form instructions before input fields

### Localization

- Write for a global audience (20+ languages)
- Use active voice
- Avoid idioms, metaphors, slang, and cultural references
- Avoid unnecessary abbreviations
- Plan for text expansion (English expands 20–30% in German, Russian)

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
| Please | Implies the system is asking a favour | Omit |
| Sorry | Focus on moving forward | State what happened and next step |
| No | Negative, stark | Reframe positively ("There aren't any drafts") |
| Oops | Too casual for errors | Direct, actionable message |
| Are you sure | Vague, repetitive | Specific confirmation title + consequence |

### Pronouns and determiners

| Pronoun | Usage |
| --- | --- |
| **I, me** | Sometimes in buttons ("I agree") |
| **You** | When speaking directly to the user |
| **We, us** | When Webex is speaking |
| **My** | "My Personal Room" (always capitalized) |
| **Articles** | Use in longer messages; omit in buttons/CTAs when meaning is obvious ("Upload file" not "Upload the file") |

### Terminology glossary

| Term | Definition | Usage notes |
| --- | --- | --- |
| Space | A persistent collaboration area for a team, project, or topic | Capitalize when referring to the Webex feature; use specific name in delete confirmations ("Delete Spring Campaign") |
| Meeting | A scheduled or ad hoc audio/video session | Prefer "meet" as verb in casual copy ("meet face-to-face") |
| Personal Room | A user's persistent meeting room | Always capitalize; use "My Personal Room" in navigation paths |
| Studio | Webex Studio product context | Use in status/sign-off copy when contextually appropriate |
| Webex App | The client application | Prefer "Webex would like to…" over "Webex App Needs to…" for permissions |

## Content patterns

### Button labels

- **Format:** Verb + noun when the noun adds clarity
- **Case:** Sentence case
- **Length:** Keep concise; aim for 25 characters or fewer when possible
- **Examples:** Save changes, Create project, Delete, Cancel, Continue, I agree

### Error messages

- **Format:** What happened + what to do next
- **Tone:** Crisis moment — positive, direct, understanding. No exclamation points.
- **Examples:**
  - Bad: Error 403
  - Good: You don't have access to this page. Ask your admin for permission.

### Empty states

- **Format:** Descriptive header + brief purpose or encouragement + optional action
- **Tone:** Informative (most) or Timely (occasional). Avoid "No [thing]."
- **Example:** Drafts — *This is where your unfinished messages await their finishing touch.*

### Confirmation dialogs

- **Title:** Name the specific item or action ("Delete Spring Campaign" not "Delete space?")
- **Body:** State the consequence plainly; use contractions; avoid asking the same question twice
- **Example:** Once deleted, all content and history in this space will be gone forever.

### Permission prompts

- **Title:** Inviting, not commanding ("Webex would like to access your camera")
- **Body:** Benefit-led, warm ("This is so you can show your smiling face in meetings.")
- **Avoid:** Generic system copy that sounds copied from another app

### Status and system messages

- **Format:** Personal, plain language + optional peppy sign-off
- **Example:** Your network strength and CPU are doing great. Enjoy the Studio!

### Multi-step flows

- **Format:** Set honest expectations upfront; acknowledge friction with warmth
- **Example:** Connecting %App% to Webex may take a few steps — *Depending on the platform, a code might need to be entered multiple times. Usually, it's just once. Don't worry, we'll guide you through every step.*

### Tooltips and helper text

- Brief, instructional tone
- No periods on hover-only tooltips
- No ellipses in tooltips

### Placeholder text

- Never use: Lorem ipsum, Sample text, Placeholder, TODO copy
- Write real, on-brand copy that serves the user

## Examples in action

### Example 1 — Impression / empty state

| | Not us | This is us |
| --- | --- | --- |
| **Copy** | No drafts — *Come here to find all your draft messages. You can start composing your thoughts here, and they'll be saved as drafts for later.* | Drafts — *This is where your unfinished messages await their finishing touch.* |
| **Why?** | Uses negative "No." Bland and obvious. Passive voice ("be saved"). Sounds copied from another app. | Avoids negative language. Wondrous, helpful tone. "Await the finishing touch" adds whimsy. Clear and encourages action. |

### Example 2 — Crisis / confirmation dialog

| | Not us | This is us |
| --- | --- | --- |
| **Copy** | **Delete space?** — *Deleting a space will erase all data. This can not be undo. Are you sure you want to delete this space?* | **Delete Spring Campaign** — *Once deleted, all content and history in this space will be gone forever.* |
| **Why?** | Lacks energy and clarity. Wordy, repetitive. No contractions — formal and harsh. Passive and weak. Ambiguous buttons. | Direct, specific title. Plain consequence. "Gone forever" adds wry humor while communicating permanence. |

### Example 3 — Achievement / status message

| | Not us | This is us |
| --- | --- | --- |
| **Copy** | *Network strength and CPU usage are within acceptable operating parameters.* | *Your network strength and CPU are doing great. Enjoy the Studio!* |
| **Why?** | Cold, clinical. Wordy, complex. "Acceptable" isn't reassuring. | Upbeat, personal. Simple wording. Peppy sign-off reduces worry. |

### Example 4 — Camera permission

| | Not us | Impression / permission prompt |
| --- | --- | --- |
| **Copy** | Webex App Needs to Access Your Camera — *Make your camera available so you can meet face-to-face.* | Webex would like to access your camera — *This is so you can show your smiling face in meetings.* |
| **Why?** | Generic, command-like. Lacks engaging language. Unclear buttons. | Inviting tone. Benefit-led. Warm personality ("smiling face"). Clearer actions. |

### Example 5 — Instructional / multi-step flow

| | Not us | This is us |
| --- | --- | --- |
| **Copy** | Connect Box account with Webex — *Want connect your Box account to Webex in just three simple steps?* | Connecting %App% to Webex may take a few steps — *Depending on the platform, a code might need to be entered multiple times. Usually, it's just once. Don't worry, we'll guide you through every step.* |
| **Why?** | Generic, oversimplified ("just three simple steps"). Redundant. Hides technical limitations. | Conversational, empathetic. Sets honest expectations. Acknowledges friction with warmth. |

## Evaluation checklist

Before shipping any user-facing copy, verify:

- [ ] **Message alignment** — Matches intended message, context, and goal
- [ ] **User enablement** — Helps user move to next step or complete a task
- [ ] **Accuracy** — All facts and logic correct
- [ ] **Spelling and grammar** — No errors
- [ ] **Simplicity** — No jargon; simple, clear language
- [ ] **Webex voice** — Spirited (dynamic, subtle humor), Diligent (precise, intentional), Thoughtful (inclusive, empathetic)
- [ ] **Moment fit** — Tone matches Impression, Crisis, Instructional, or Achievement context
- [ ] **Forward momentum** — Always provide a next step; no dead ends
- [ ] **Style alignment** — Sentence case, correct date/time formats, punctuation rules
- [ ] **No placeholder copy** — Never Lorem ipsum, Sample text, Placeholder, or TODO copy

## References

- **Figma (internal):** `Cisco` → `Webex Suite Apps` → `_Momentum Design System` → `04 - ✍️ Content Design`
