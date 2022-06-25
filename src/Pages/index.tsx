import React from "react"

const Index: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center ">
            <p className="text-3xl">
                This repo contains a react-typescript template.
                It has the following modules installed.
            </p>
            <ul className="list-disc">
                <li>React Router dom</li>
                <li>React Icons</li>
                <li>Tailwind CSS</li>
            </ul>
        </div>
    )
}

export default Index