import PageLayout from '../layout/PageLayout'
import './Casas.css'
import card2 from '../assets/starks.png';

function Casas(){
    return(
        <PageLayout>
            <main id='container'>
                <h1 id='margin'>Starks</h1>
                <section className='section-cards'>
                    <img className='img-casas' src={card2} alt="" />
                    <p>A Casa Stark é uma das mais antigas e nobres famílias de Westeros. São conhecidos por sua honra, lealdade e pela rígida tradição de proteger o Norte. Descendem dos Primeiros Homens e governaram como Reis do Norte por milhares de anos antes da unificação dos Sete Reinos.
                    Mesmo após se tornarem Senhores de Winterfell, os Starks sempre foram respeitados por sua ligação com as tradições antigas, os deuses antigos e pela defesa dos valores do Norte. São sóbrios, sérios e extremamente ligados à família e ao dever..
                    </p>
                    <div>
                        <p>Fundador:Jon Snow</p>
                    </div>
                </section>
            </main>
        </PageLayout>
    )
}

export default Casas