
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
