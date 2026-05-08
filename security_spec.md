# Security Specification for Skilligram

## Data Invariants
1. A post must have a valid authorId matching the currently authenticated user.
2. A user can only edit their own profile.
3. Communities can only be created by signed-in users.
4. Messages must belong to a conversation where the user is a participant. (Simplifying for MVP: messages are public or restricted by relation).
5. Jobs can only be posted by users with the 'recruiter' role.
6. AI recommendations are private to the user.

## The Dirty Dozen Payloads (Rejection Tests)
1. **Identity Spoofing**: Post with `authorId: "someone_else"`.
2. **State Shortcutting**: Job application with `status: "hired"` without recruiter action.
3. **Resource Poisoning**: Community name with 1MB of junk text.
4. **Shadow Update**: Updating a post with a hidden `isVerified: true` field.
5. **PII Leak**: Reading someone else's email from the `users` collection.
6. **Orphaned Write**: Creating a comment for a post that doesn't exist.
7. **Immortality Breach**: Changing the `createdAt` timestamp of a post.
8. **Malicious ID Injection**: Creating a document with ID `../../etc/passwd`.
9. **Unverified Auth**: Writing to the database without an email-verified account.
10. **Query Scraping**: Listing all users to extract emails.
11. **Role Escalation**: Setting `role: "admin"` on own profile.
12. **Recursive Cost Attack**: Deeply nested lists or objects to trigger O(n) validation cost.

## Test Runner Logic
The `firestore.rules.test.ts` will verify these denials.
