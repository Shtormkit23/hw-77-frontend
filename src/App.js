import React from 'react';
import Layout from "./components/Layout/Layout";
import {Switch, Route} from "react-router-dom";
import NewPost from "./containers/NewPost/NewPost";
import Posts from "./containers/Posts/Posts";

const App = () => (

    <Layout>
                <Switch>
                    <Route path="/" exact component={Posts}/>
                    <Route path="/add-post" exact component={NewPost}/>
                    <Route render={() => <h1>404 Not Found</h1>}/>
                </Switch>
    </Layout>
);

export default App;