import React from 'react';
import'./Blog.css';

const Blog = () => {
    return (
        <div className='container'>
                <h2 className='text-center  question'>Question Answer Section</h2>
                <h4 className='questions'>What is context API?  When it is used?</h4>
                <p className='answer'>Ans:Context API can solve many problems that modern applications face, related to ,<br></br>
                    state management, for example, props drilling. Many solutions can solve state <br></br>
                    management issues and props drilling, but they may increase your build size <br></br>
                    and compromise your app performance. Context API is a React built-in feature,<br></br>
                     so we don't have to worry about performance overhead and library installing issues. </p>


                <h4 className='questions'>What is custom hook?</h4>
                <p className='answer'>Ans:Custom Hook is in fact a single function, prefixed by the word “use”, for example<br></br> “useTable” or “usePayment”.
                     This hooks allows to encapsulate and abstract complex operations,<br></br> into a functional and linear code.</p> 


                 <h4 className='questions'>What is ref? How it is works?</h4>  
                 <p className='answer'>Refs is the shorthand used for references in React. It is similar to keys in React. It is an attribute which <br></br>
                    makes it possible to store a reference to particular DOM nodes or React elements. It provides a way to access <br></br>
                    React DOM nodes or React elements and how to interact with it.
                     It is used when we want to change the value of a child component, <br></br>
                     without making the use of props.</p>    


                     <h4 className='questions'>What is use Memo?</h4>
                     <p className='answer'>In React functional components, when props within a component change, the entire component<br></br>
                         re-renders by default. In other words, if any value within a component updates, the entire 
                         component will re-render,<br></br>
                         including functions/components that have not had their values/props altered.</p>
        </div>
    )
};

export default Blog;