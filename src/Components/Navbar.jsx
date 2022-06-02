import { Button ,Link} from '@chakra-ui/react'
import React from 'react'
import Inspiration from "./Inspiration"
import Work from "./Work"
import styles from "./styles.module.css"


const Navbar = () => {
  return (
  <div className={styles.maindiv}>
    <div className={styles.buttondiv}>
      <div>
    <h1 className={styles.logo}>Logo</h1>
      </div>

<Inspiration/>
<Work/>
<Button variant="none">Learn Design</Button>
<Button variant="none">Hire Designers</Button>
</div>
<div className={styles.linkdiv}>
  <Link>Sign</Link>
  <Button bg={"#ed64a6"} color="white">Signup</Button>
</div>

</div>
  )
}

export default Navbar