import styles from './App.module.css'

function App() {

  let butt =['1','2','3','4','5','6','7','8','9','0']

  return (
    <>
      <div className={styles.calculator}>
        <input type="text" className={styles.display} />
        <div className={styles.container}>
          {butt.map((item)=>(
<button className={styles.Button}>{item}</button> 
          )           
            )}
        </div>
      </div>
    </>
  )
}

export default App
