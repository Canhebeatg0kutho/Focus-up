import classes from "./quotes.module.css"


export default function Quotes(){

    return(
        <div className={classes.quotes}>
        <h1 className={classes.text}>“Learning is the only thing the mind never exhausts, never fears, and never regrets.” – Leonardo da Vinci.</h1>
        <h1 className={classes.text}>“Success is not final, failure is not fatal: it is the courage to continue that counts.” – Winston Churchill</h1>
        <h1 className={classes.text}>“When you change your thoughts, remember to also change your world.”—Norman Vincent Peale</h1>
        </div>
    )
}