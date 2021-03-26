import * as React from 'react';
import { useParams } from 'react-router-dom';



const ExampleID: React.FC<ExampleID> = () => {


    return (
        <>
            <main className="container">
                <section className="row">
                    <div className="col-12">
                        <h1 className="text-center">This is a page for ExampleID!</h1>
                    </div>
                </section>
            </main>
        </>
    );

}

interface ExampleID {}

export default ExampleID;
