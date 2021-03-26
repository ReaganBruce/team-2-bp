import * as React from 'react';

const ExamplePage: React.FC<ExamplePage> = () => {
    return (
        <>
            <main className="container">
                <section className="row">
                    <div className="col-12">
                        <h1 className="text-center">This is a page for ExamplePage!</h1>
                    </div>
                </section>
            </main>
        </>
    );

}

interface ExamplePage {}

export default ExamplePage;
