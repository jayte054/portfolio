import { useState } from "react"

export const Auth = () => {
const [email, setEmail] = useState<string>("")
const [password, setPassword] = useState<string>("")
    return (
        <div>
            <h2>Sign up</h2>
            <p>email: <input type="email"
                             value={email} 
                             placeholder = "email Address"
                             onChange={(e) => setEmail(e.target.value)}/>
            </p>
            <p>password: <input type="password"
                                placeholder="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
            </p>
        </div>
    )
}