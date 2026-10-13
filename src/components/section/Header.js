import React from 'react';
import Button from '../layouts/Button'
import { header } from '../../profile'

const Header = () => {
    return (
        <div>
            <div className="Header">
                <h1>{ `Je suis ${header.name}` }</h1>
                <p className="line-1 anim-typewriter">bienvenue sur mon portfolio... </p>
                <Button text="Découvrir mon profil" link="#about" />
            </div>
        </div>
    )
}

export default Header;