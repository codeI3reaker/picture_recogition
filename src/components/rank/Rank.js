import React from "react";

const Rank = ({ user }) => {
    const { name, entries} = user
    return (
        <div>
            <div className = "white f1">
                Welcome {name}! You have looked up {entries} faces!
            </div>
        <div className ="gray f3">
            Your rank is
        </div>
        <div className = "black f2">
            #5
        </div>
            </div>
    )
}

export default Rank;