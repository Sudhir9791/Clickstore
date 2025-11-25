import './Google.css';
import { Link } from 'react-router-dom';
function Google() {
  return (
    <div className="App">
<body>
        <div class="box">
			<img className='google-image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjbMRAckzfPDfv7uKrCHwncjgfVQz-GSE1TYqOC5NQ2H7WSCdm8E7pfoX5Nv7rqfho51k&usqp=CAU"/>
                <h2>Sign in</h2>
                <p>Use your Google Account</p>
                <form>
                  <div class="inputBox">
                    <input type="email" name="email" required onkeyup="this.setAttribute('value', this.value);"    />
                    <label>Email</label>
                  </div>
                  <div class="inputBox">
                        <input type="password" name="text" required onkeyup="this.setAttribute('value', this.value);"   />
                        <label>Password</label>
                      </div>
                      <Link to='/all-products'>
                  <input type="submit" name="sign-in" value="Sign In"/>
                      </Link>
                </form>
              </div>
</body>
    </div>
  );
}

export default Google;