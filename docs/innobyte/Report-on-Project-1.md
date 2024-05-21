# Project 1
**The following is a report on the work done by INNOBYTE LABS on a project assigned during CSC 3105 coursework in the 2022/23 session, as follows:**

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

# INNOBYTE LABS Social Media Network UML Class Hierarchy Design Report

## Introduction:
This project aimed to design a UML model for a social media network. The system includes various entities such as users, groups, posts, reactions, and connections between users. The design facilitates the interaction between users, sharing of content, and engagement with posts through likes and other reactions.

## Design Overview:
The UML model comprises several classes and interfaces organized in a hierarchical structure to represent the entities and their relationships within the social media system.

1. **Person and User:**
   - The `Person` class serves as an abstract representation of individuals, capturing common properties like name and age.
   - The `User` class extends `Person` and includes additional attributes such as username, email, and functionalities specific to users in the social media context, such as creating posts and sending messages.

2. **Connections:**
   - The `Connection` interface defines methods for establishing and managing connections between users, reflecting social interactions like following or friending.

3. **Groups:**
   - The `Group` class represents collections of users with shared interests or affiliations. It contains properties such as group name and member list, allowing users to interact within specific communities.

4. **Posts and Reactions:**
   - The `Post` class encapsulates content shared by users, including text, media, and information about the author. Users can interact with posts through various reactions, such as likes or comments, which are represented by the `Reaction` interface and its implementations like `Like`.

5. **Media:**
   - The `Media` abstract class provides functionalities for handling media content within posts, such as displaying and downloading.

6. **Follower and Share:**
   - The `Follower` class represents the follower relationship between users, allowing users to follow or unfollow others.
   - The `Share` class facilitates sharing posts between users, enabling content dissemination within the network.

## Concepts Explanation Table:
| S/No. | Concept A   | Concept B   | Relationship | Explanation                                                                                                                                                                     |
|-------|-------------|-------------|--------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1     | Person      | User        | Inheritance  | User inherits properties and methods from Person because a user is a specific type of person with additional characteristics specific to the application, such as username and email.  |
| 2     | User        | Connection  | Inheritance  | User inherits properties and methods from Connection because a user interacts with other users through connections such as friendships, follows, etc.                           |
| 3     | Group       | Connection  | Association  | Group uses Connection because users within a group interact with each other through connections, like being members or following each other.                                |
| 4     | Group       | Post        | Association  | Group contains Post because a group may have multiple posts created by its members.                                                                                            |
| 5     | Group       | Media       | Inheritance  | Group inherits properties and methods from Media because it may contain media elements, such as images or videos, within its posts.                                         |
| 6     | Post        | Media       | Association  | Post contains Media because a post may include media content like images, videos, or links.                                                                                   |
| 7     | Post        | Like        | Association  | Post has Like because users can like posts.                                                                                                                                   |
| 8     | Follower    | Connection  | Inheritance  | Follower inherits properties and methods from Connection because a follower relationship is a type of connection between users.                                               |
| 9     | Share       | Post        | Association  | Share has Post because a user can share a specific post.                                                                                                                      |
| 10    | Like        | Reaction    | Inheritance  | Like inherits properties and methods from Reaction because liking a post is a type of reaction.                                                                                |

## Relationships:
- The UML diagram illustrates relationships between classes/interfaces, including inheritance, associations, and dependencies, reflecting how entities interact and collaborate within the system.
- For instance, users inherit functionalities from the `Connection` interface to enable social interactions, while groups associate with posts and utilize connections for member interactions.

## Conclusion:
The designed UML model provides a comprehensive blueprint for a social media system, capturing essential entities, their attributes, and interactions. It lays the foundation for implementing the system's functionalities and can serve as a guide for development and further refinement.

## Recommendations:
- Further refinement of the model may involve specifying detailed behaviors and constraints for each class's methods.
- Continuous validation and iteration based on feedback and requirements changes to ensure alignment with stakeholders' needs.

## Contributing Members
- [@devprinceng](https://github.com/devprinceng) - 20/csc/103
- [@Dennis3625](https://github.com/Dennis3625)   - 20/csc/130
- [@UDOM081](https://github.com/UDOM081) - 20/csc/132
- [@PaulOlom](https://github.com/PaulOlom) - 20/csc/110
- [@Btiangbende](https://github.com/Btiangbende) - 20/csc/153
- [@isaacmatthew1](https://github.com/isaacmatthew1) - 20/csc/074
- [@Vickieeeeee](https://github.com/Vickieeeeee) - 20/csc/221
- [@Anitaofegobi](https://github.com/Anitaofegobi) - 20/csc/ 090
- [@Zionist001](https://github.com/Zionist001) - 22/d/csc/002
- [@WhilzWurld](https://github.com/WhilzWurld) - 20/csc/266
- [@Predon22](https://github.com/Predon22) - 20/csc/181
- [@Tegzy-cmd](https://github.com/Tegzy-cmd) - 20/csc/114
- [@LOUIS5E](https://github.com/LOUIS5E) - 20/csc/046
- [@Sylviachidiebere](https://github.com/Sylviachidiebere) - 20/csc/049
- [@EmyEverBlessed](https://github.com/EmyEverBlessed) - 20/csc/033
- [@Gloryuget](https://github.com/Gloryuget) - 20/csc/041
- [@nduoyobby](https://github.com/nduoyobby) - 20/csc/249
- [@id-peter](https://github.com/id-peter) - 20/csc/062
- [@Ekomzytech](https://github.com/Ekomzytech) - 20/csc/243
- [@Puyela](https://github.com/Puyela) - 20/csc/030
- [@EMMYFALZ](https://github.com/EMMYFALZ) - 20/csc/263
- [@Heispresh](https://github.com/Heispresh) - 20/csc/173
- [@Obsjdh](https://github.com/Obsjdh) - 20/csc/213
- [@OdeySamuel](https://github.com/OdeySamuel) - 20/csc/089
- [@Emmyrexoko](https://github.com/Emmyrexoko) - 20/csc/106
- [@Chrisnkom](https://github.com/Chrisnkom) - 20/csc/081
- [@Festusolem](https://github.com/Festusolem) - 20/csc/108
