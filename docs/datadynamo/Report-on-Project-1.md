# Project 1
**The following is a report on the work done by Data Dynamo System on a project assigned during CSC 3105 coursework in the 2022/23 session, as follows:**

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

1. The UML class diagram would be found in the code directory of the repo.

2. The relationships between concepts were defined as follows:

| S/No. | Concept A | Concept B | Relationship | Explanation |
|-------|-----------|-----------|--------------|-------------|
| 1     | User      | Person    | Inheritance  | A User is a specific type of Person with additional functionalities related to social interaction. |
| 2     | Connection| Abstract  | -            | Represents a general concept of connection between users, specific types like Follower and Group inherit from it. |
| 3     | Group     | Connection| Inheritance  | A Group is a type of Connection where multiple Users can be connected. |
| 4     | Follower  | Connection| Inheritance  | A Follower is a type of Connection representing a one-directional following relationship between Users. |
| 5     | Post      | User      | Association  | A User creates a Post, establishing ownership of content within the social network. |
| 6     | Post      | Media     | Association  | A Post can contain multimedia content like images or videos. |
| 7     | Post      | Comment   | Association  | A Post can have comments from Users, enabling user interaction and discussion. |
| 8     | Post      | Share     | Association  | A Post can be shared by Users, allowing for content propagation within the network. |
| 9     | Post      | Reaction  | Association  | A Post can receive reactions from Users, enabling users to express their feelings towards posts. |
| 10    | Reaction  | Abstract  | -            | Represents a general concept of a reaction to a Post, specific types like Like inherit from it. |
| 11    | Like      | Reaction  | Inheritance  | A Like is a specific type of Reaction expressing positivity towards a Post. |
