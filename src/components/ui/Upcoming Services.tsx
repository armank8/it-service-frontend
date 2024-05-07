
const UpcomingServices = () => {
    return (
        <section className="section_container" >
            <h2 className="section_header">Our Upcoming Services</h2>

            <div className="services_container" style={{ display: 'flex', gap: '2rem' }}>
                <div>
                    <h3 style={{ textAlign: 'center' }}>IT Training: </h3>
                    <p>For businesses, IT services may include training employees on software applications and best practices to maximize productivity and security.</p>
                </div>
                <div>
                    <h3 style={{ textAlign: 'center' }}>IT Consultation: </h3>
                    <p>Professionals in this field can offer advice on technology purchases, IT infrastructure planning, and strategy development to meet specific business or personal needs.</p>
                </div>
                <div>
                    <h3 style={{ textAlign: 'center' }} >Hardware and Software Procurement</h3>
                    <p>  They can assist with sourcing and purchasing computer hardware and software, ensuring compatibility and cost-effectiveness</p>
                </div>
            </div>
        </section>
    )
}

export default UpcomingServices;