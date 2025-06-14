import PageLayout from '../layout/PageLayout'
import './Casas.css'
import card2 from '../assets/card2.jpeg';

function Casas(){
    return(
        <PageLayout>
            <main id='container'>
                <h1>Starks</h1>
                <section className='section-cards'>
                    <img className='img-casas' src={card2} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id commodi dolores harum amet laudantium nisi ipsam, praesentium nulla sunt. Provident, error delectus fugiat inventore pariatur veniam excepturi ullam odio laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum temporibus tenetur assumenda doloremque voluptatum optio incidunt dignissimos, molestiae ex odit qui consectetur, ullam nam eum labore? Placeat quasi neque omnis.</p>
                </section>
            </main>
        </PageLayout>
    )
}

export default Casas