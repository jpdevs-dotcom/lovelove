import './pages-style.css/letter-style.css';

const Letter = ({ closeLetter }) => {

    return (
        <div className="Letter">
            <div className="message">
                <h1>Hi, Love!</h1>
                <p align="justify"> Thank you for always being there love. Thank you sa healthy rs, kimi.
                    5 months na kit nag inuwatay okay na ine hsahahahaha. 
                    Anyways, u have made me a better person in some aspects love, Thank you so much. No matter how many times we argue/fight over things nga
                    diko lat maintindihan, I will keep my words to u bb. Pls know that I do love you
                    not only for who you are and what you're capable of, but also for who I am when
                    I am with you. You've really made me a better person love, no kemekeme. Thank you
                    for being a companion, a girlfriend, a best bud, and a lover. Kadamo sa inagi, ikaw manla ngayan
                    haahahhahaha Happy 5th month mahal. Looking forward to make more mem'ries with u hehe.
                    I love you always in all ways, my love!!🤍
                </p>

                <button onClick={ () => closeLetter(false) }>close</button>
            </div>
        </div>
    )
}

export default Letter;