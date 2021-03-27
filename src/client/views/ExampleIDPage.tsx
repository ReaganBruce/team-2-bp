import * as React from 'react';
import { useParams } from 'react-router-dom';

const ExampleIDPage: React.FC<ExampleIDPage> = () => {

 let { exampleid } = useParams<{ exampleid: string }>();

    return (
        <>
            <main className="container">
                <section className="row">
                    <div className="col-12">
                        <h1 className="text-center">This is a page for {exampleid}!</h1>
                    </div>
                </section>
            </main>
        </>
    );

}

interface ExampleIDPage { }

export default ExampleIDPage;