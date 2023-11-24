import Card from "./Card";
import html from '../images/html.png'
import css from '../images/css.png'
import js from '../images/js.png'
import java from '../images/java.png'
import react from '../images/react.png'
import python from '../images/python.png'
import c from '../images/c.png'
import git from '../images/git.png'
import vscode from '../images/vscode.png'
function Skill() {
    const SkillP = [
        {
            id: 1,
            H: "html",
            p: "Hyper Text Markup Language",
            I:html,
        },

        {
            id: 2,
            H: "css",
            p: "Cascading Style Sheets",
            I:css,
        },

        {
            id: 3,
            H: "js",
            p: "JavaScript",
            I: js,
        },
        {
            id: 3,
            H: "java",
            p: "Java is a widely-used programming language for coding web applications",
            I:java,
        },
        {
            id: 3,
            H: "react",
            p: "React is a declarative, component-based, open-source front-end JavaScript library for building user interfaces",
            I: react,
        },
        {
            id: 3,
            H: "python",
            p: "Python is an interpreted, object-oriented, high-level programming language with dynamic semantics ",
            I: python,
        },
        {
            id: 3,
            H: "c",
            p: "C is a procedural language that provides no support for objects and classes",
            I: c,
        },
        {
            id: 3,
            H: "git",
            p: "Git is a DevOps tool used for source code management",
            I: git,
        },
        {
            id: 3,
            H: "vscode",
            p: "Visual Studio Code, also commonly referred to as VS Code, is a source-code editor developed by Microsoft for Windows, Linux and macOS.",
            I: vscode,
        },
    ]
    return (
        <div>
            <h2>Skills</h2>
            <h3>My skills💡</h3>
            <div className="skill-list">
                {SkillP.map((item) => (
                    <Card Skill={item} key={item.id} />
                ))}
            </div>
        </div>
    );
}

export default Skill;
