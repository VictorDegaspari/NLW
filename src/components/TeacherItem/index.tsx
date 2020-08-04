import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'
function TeacherItem(){
return(<article className="teacher-item">
<header>
    <img src="https://avatars2.githubusercontent.com/u/61597038?s=460&u=0108b65cb2c3021219b6bbf53a506fda37259f99&v=4" alt="Victor Degaspari"/>
    <div>
        <strong>Victor Degaspari</strong>
        <span>Física</span>
    </div>
</header>
<p>
    Lorem Ipsum ANKCALKm cjwnvsm vm vksm s dkjnvms 
    <br/><br/>
    v,smd j dvsm ,sdm jsd  vs 
</p>

<footer>
    <p> Preço/hora<strong>R$ 100,00</strong>
    </p>
    <button type="button">
        <img src={whatsappIcon} alt="Whats"/>Entrar em contato
    </button>
</footer>
</article>)

}

export default TeacherItem




