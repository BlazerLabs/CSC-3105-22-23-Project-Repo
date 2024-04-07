
# A brief Documentation on our UML tool: PlantUml

## Introduction to PlantUML

PlantUML is an open-source tool that enables users to create diagrams from simple text descriptions. It supports various diagram types, including UML diagrams, sequence diagrams, and more. Instead of manual drawing, PlantUML automates the diagram creation process.

## How to Use PlantUML

1. **Install PlantUML**: You can install PlantUML locally or use it online via different platforms.

2. **Write Diagram Descriptions**: Use a text editor to describe the diagrams using PlantUML's intuitive syntax.

3. **Generate Diagrams**: Utilize command-line tools or integrate with your preferred editor/IDE to generate diagrams.

4. **View and Export**: View generated diagrams directly or export them to PNG, SVG, or PDF formats.

## Where to Apply PlantUML

- **Software Development**: Visualize software architecture, design, and workflows with UML diagrams.
  
- **Documentation**: Illustrate concepts, workflows, and system architecture in technical documentation.
  
- **Project Management**: Represent project plans, timelines, and dependencies.
  
- **Education**: Explain complex topics and concepts in courses, workshops, and presentations.

### Defining Entities, Properties, and Methods

```plantuml
class MyClass {
  - property1: DataType
  - property2: DataType
  + method1(): ReturnType
  + method2(parameter: ParameterType): ReturnType
}
```
### Defining Relationships Between Entities
```
class Class1
class Class2

Class1 -- Class2 : Association
Class1 <|-- Class2 : Inheritance
Class1 ..> Class2 : Dependency
```
### Further explanation on relationships & how to define relationships using plantuml
Under here we're explaining some relationships, their notation and how they're applied in plantuml

1. **Association (A ---- B)**:
   - **Meaning**: Indicates a relationship between two classes where instances of one class are related to instances of the other class. It can be one-to-one, one-to-many, or many-to-many.
   - **Example**: A `Car` ---- `Driver`. A car can have one or more drivers, and a driver can drive one or more cars.

2. **Aggregation (A <>-- B)**:
   - **Meaning**: Represents a relationship where one class (the whole) contains or is associated with another class (the part). The part can exist independently of the whole.
   - **Example**: A `University` <>-- `Department`. A department belongs to a university, but it can exist independently if the university closes.

3. **Composition (A o-- B)**:
   - **Meaning**: Similar to aggregation but with stronger ownership. The part cannot exist independently of the whole; it's part of the whole's lifecycle.
   - **Example**: A `Car` o-- `Engine`. An engine is part of the car, and if the car is destroyed, the engine is typically destroyed too.

4. **Generalization (Inheritance) (A <|-- B)**:
   - **Meaning**: Indicates that one class is a specialized form of another class, known as the superclass. It represents an "is-a" relationship.
   - **Example**: A `Student` <|-- `Person`. A student is a person.

5. **Realization (Interface) (A .--| B)**:
   - **Meaning**: Shows that a class implements the behavior specified by an interface. It represents a contract between the class and the interface.
   - **Example**: A `Bird` .--| `Flyable`. The bird class implements the Flyable interface, meaning it can fly.
  
6. **Dependency (A ..> B)**:
   - **Meaning**: Signifies that one class depends on another class. Changes in the dependent class may affect the class it depends on.
   - **Example**: `Class A` ..> `Class B`. If Class A uses the functionalities of Class B, it has a dependency on Class B. If Class B changes, Class A might need to change as well.

7. **Association II Class (A ----< B >---- C)**:
   - **Meaning**: Represents an association between two classes with its own class, often used when the association itself has attributes or behavior.
   - **Example**: `Student` ----< `Enrollment` >---- `Course`. The Enrollment class represents the association between a student and a course, possibly with attributes like enrollment date or grade.

### Why Use PlantUML
- Simplicity: Easy-to-write plain text descriptions.
- Consistency: Uniform styling and formatting for diagrams.
- Version Control: Diagram descriptions can be versioned alongside code.
- Automation: Automatic diagram generation saves time and reduces errors

## Supported Software
_You can use PlantUML with various software:_

- Visual Studio Code: Utilize extensions like PlantUML to integrate PlantUML support directly into your coding environment.
- IntelliJ IDEA: Leverage plugins like PlantUML integration to seamlessly generate diagrams within your IDE.
- Online Editors: Platforms like PlantText provide online editors for creating PlantUML diagrams without the need for local installation.

## Syntaxes for UML Entities in PlantUML

- Class Declaration: class ClassName { }
- Properties: - propertyName: Type
- Methods: + methodName(parameters): ReturnType
