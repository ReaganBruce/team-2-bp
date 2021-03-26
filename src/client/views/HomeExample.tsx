import * as React from 'react';


const HomeExample: React.FC<HomeExample> = () => {
    return (
        <>
            <main className="container">
                <section className="row">
                    <div className="col-12">
                        <h1 className="text-center">This is a page for HomeExample!</h1>
                    </div>
                </section>
            </main>
        </>
    );

}

interface HomeExample {}

export default HomeExample;
