import React from 'react';
import getUserData from '../utils/getUserData';

const RepoList = ({url}) => {
    const [repoData, setRepoData] = React.useState(null);

    React.useEffect(() => {
        getUserData(url).then(repos => {
            setRepoData(repos[3])
        })
    }, []);

    if (repoData) {
        var { name, description, homepage, html_url } = repoData
    }


    return (
        <main>
        <section>
            <article>
                <h4>{name}</h4>
                <ul>
                    <li><a>The Site: {homepage}</a></li>
                    <li><a>The Code: {html_url} </a></li>
                </ul>
                <p>{description}</p>
            </article>
        </section>
        </main>
    )
};

export default RepoList;