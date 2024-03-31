# Project 1
**The following is a report on the work done by YOUR_CORPORATION_NAME on a project assigned during CSC 3105 coursework in the 2022/23 session, as follows:**

## Question
You will define a UML-defined class hierarchy using the following concepts related to the idea of a social network app:

**Person, User, Connection, Group, Post, Media, Follower, Share, Reaction, Like.**

*(Let the names of these concepts reflect their real-world connotations within the application domain specified - that of a social network app.)*

Note that the connections between concepts in this hierarchy do not necessarily have to be all of the same kind, nor must they all be inheritance relations. However, each concept can just be one, and only one, of the following: a class, an abstract class or an interface.

Your tasks are as follows:
1. Draw up a UML class diagram describing this hierarchy. Show ALL properties, and up to 5 relevant methods. Do not include any getter OR setter methods.
2. Explain, in detail, your choices in defining this hierarchy, using a tabular form, as follows:

| S/No. | Concept A | Concept B | Relationship | Explanation |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| ... | ... | ... | ... | ... |

## Response
_You can now draft your response beginning from here._



# FutureForge Labs Social Network App Class Hierarchy

This project defines a class hierarchy for a social network app. The hierarchy includes classes representing various entities and their relationships within the application domain.

## Class Hierarchy

### Person

- Represents a generic person in the social network.
- Attributes:
  - `name`: Name of the person.
- Methods:
  - `Person(name: string)`: Constructor method to initialize a person object.
  - `introduce(): void`: Method to introduce the person.

### User

- Represents a user of the social network app, extending the `Person` class.
- Attributes:
  - `userId`: Unique identifier for the user.
  - `username`: Username of the user.
  - `password`: Password of the user.
- Methods:
  - `User(name: string, username: string, password: string)`: Constructor method to initialize a user object.
  - `login(): void`: Method to authenticate user login.
  - `createPost(content: string): Post`: Method to create a new post.
  - `createGroup(name: string): Group`: Method to create a new group.
  - `reactToPost(post: Post, reactionType: string): void`: Method to react to a post.
  - `followUser(user: User): void`: Method to follow another user.

### Connection

- Manages connections between users.
- Attributes:
  - `connectedUsers`: Array of connected users.
- Methods:
  - `addConnection(user: User): void`: Method to add a new connection.
  - `removeConnection(user: User): void`: Method to remove a connection.
  - `getMutualConnections(user: User): User[]`: Method to get mutual connections between users.
  - `suggestConnections(user: User): User[]`: Method to suggest potential new connections.
  - `isConnected(user: User): boolean`: Method to check if a user is connected to another user.

### Group

- Represents a group within the social network.
- Attributes:
  - `groupId`: Unique identifier for the group.
  - `groupName`: Name of the group.
  - `members`: Array of group members.
- Methods:
  - `addMember(user: User): void`: Method to add a user to the group.
  - `removeMember(user: User): void`: Method to remove a user from the group.
  - `postInGroup(user: User, content: string): Post`: Method to make a post within the group.
  - `getGroupPosts(): Post[]`: Method to retrieve posts within the group.
  - `inviteToGroup(user: User): void`: Method to invite users to join the group.

### Post

- Represents a post made by a user.
- Attributes:
  - `postId`: Unique identifier for the post.
  - `content`: Content of the post.
  - `author`: Author of the post.
  - `comments`: Array of comments on the post.
- Methods:
  - `addComment(comment: Comment): void`: Method to add a comment to the post.
  - `attachMedia(media: Media): void`: Method to attach media to the post.
  - `deletePost(): void`: Method to delete the post.
  - `likePost(user: User): void`: Method to like the post.
  - `sharePost(user: User): void`: Method to share the post.

### Media

- Represents media attachments.
- Attributes:
  - `url`: URL of the media.
- Methods:
  - `play(): void`: Method to play the media.
  - `download(): void`: Method to download the media.
  - `share(): void`: Method to share the media.
  - `delete(): void`: Method to delete the media.
  - `reportAbuse(): void`: Method to report the media for abuse.

### Follower

- Represents followers of a user.
- Attributes:
  - `followers`: Array of followers.
- Methods:
  - `follow(user: User): void`: Method to follow another user.
  - `unfollow(user: User): void`: Method to unfollow another user.
  - `getFollowersCount(): int`: Method to get the count of followers.
  - `getFollowingCount(): int`: Method to get the count of users being followed.
  - `isFollowing(user: User): boolean`: Method to check if a user is following another user.

### Share

- Represents shares of posts.
- Attributes:
  - `sharedBy`: User who shared the post.
  - `post`: Post that was shared.
- Methods:
  - `sharePost(user: User, post: Post): void`: Method to share a post.
  - `getSharedByUser(): User`: Method to get the user who shared the post.
  - `getSharedPost(): Post`: Method to get the shared post.
  - `isSharedByUser(user: User): boolean`: Method to check if a post is shared by a user.
  - `getShareCount(): int`: Method to get the count of shares.



### Like

- Represents likes on posts.
- Attributes:
  - `likedBy`: Array of users who liked the post.
- Methods:
  - `like(user: User): void`: Method to like a post.
  - `unlike(user: User): void`: Method to unlike a post.
  - `getLikesCount(): int`: Method to get the count of likes.
  - `getLikedByUsers(): User[]`: Method to get users who liked the post.
  - `isLikedByUser(user: User): boolean`: Method to check if a post is liked by a user.

## Relationships

| S/No. | Concept A   | Concept B | Relationship | Explanation                                                                                                                                                   |
|-------|-------------|-----------|--------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1     | Person      | User      | Inheritance  | A `User` is a specific type of `Person` with additional attributes and behaviors specific to users of the social network app.                               |
| 2     | User        | Connection| Composition  | A `User` has a composition relationship with `Connection` to manage the connections between users.                                                           |
| 3     | User        | Group     | Aggregation | A `User` can be a member of one or more `Group`s, but the existence of a `User` doesn't depend on the existence of a `Group`.                                |
| 4     | User        | Post      | Association | A `User` can create and interact with multiple `Post`s, but the existence of a `User` and a `Post` is independent of each other.                             |
| 5     | Group       | User      | Composition  | A `Group ` has a composition relationship with `User`s to manage the membership of users within the group.                                                      |
| 6     | Post        | Media     | Composition  | A `Post` can have multiple `Media` attachments, but the existence of `Media` objects is tied to the existence of `Post`s.                                      |
| 7     | Post        | Reaction  | Association | Users can react to multiple `Post`s, but the existence of a `Post` and a `Reaction` is independent of each other.                                               |
| 8     | Post        | Like      | Association | Users can like multiple `Post`s, but the existence of a `Post` and a `Like` is independent of each other.                                                     |
| 9     | User        | Follower  | Association | Users can have multiple followers, and each follower can follow multiple users. This represents a many-to-many relationship.                                      |
| 10    | Post        | Share     | Association | Users can share multiple `Post`s, but the existence of a `Post` and a `Share` is independent of each other.                                                    |
| 11    | Share       | User      | Dependency   | `Share` depends on `User` for sharing the post. This relationship implies that a `Share` cannot exist without a `User`.                                         |
| 12    | Share       | Post      | Dependency   | `Share` depends on `Post` for sharing. This relationship implies that a `Share` cannot exist without a `Post`.                                                   |
| 13    | Reaction    | User      | Dependency   | `Reaction` depends on `User` for who reacted to the post. This relationship implies that a `Reaction` cannot exist without a `User`.                            |
| 14    | Like        | User      | Dependency   | `Like` depends on `User` for who liked the post. This relationship implies that a `Like` cannot exist without a `User`.                                         |

## Contributors

- [@Emmzy-Tech](https://github.com/Emmzy-Tech)
- [@Emilia-Ojobo](https://github.com/Emilia-Ojobo)
- [@Eberesundayikechukwu](https://github.com/Eberesundayikechukwu)
- [@PrincGit](https://github.com/PrincGit)
- [@Nmesoma5](https://github.com/Nmesoma5)
- [@Jenjoeirek]( https://github.com/Jenjoeirek)
- [@Debbievic2023](https://github.com/Debbievic2023)
- [@ThankGod4](https://github.com/ThankGod4)
- [@Glorious5348](https://github.com/Glorious5348)
- [@Adikwumary](https://github.com/Adikwumary)
- [@Fepeedjo](https://github.com/Fepeedjo)
- [@Edetsaviour190](https://github.com/Edetsaviour190)

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

This README provides an overview of the class hierarchy, relationships between classes, and methods within each class. It also includes detailed explanations of each relationship using a tabular format, making it easier for developers to understand the structure and functionality of the social network app.
