console.log('Before');
// getUser(1, getRepositories);

// consume the promise
// getUser(1)
//     .then(user => getRepositories(user.githubUsername))
//     .then(repos => getCommits(repos[0]))
//     .then(commits => console.log('commits', commits))
//     .catch(err => console.log('Error', err.message));

// Async and Await
async function displayCommits() {
    try {
        const user = await getUser(1);
        const repos = await getRepositories(user.githubUsername);
        const commits = await getCommits(repos[0]);
        console.log(commits);
    } catch (err) {
        console.log('Error',err.message);
    }
    
}

displayCommits()


console.log('After');


function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading a user from a databse');
            resolve({id: id, githubUsername: 'Calendula'});
        }, 2000);
    });
    
}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading a repository from a user');
            resolve(['repo1', 'repo2', 'repo3']);
            // reject(new Error('cant get this repo'));
        }, 2000);
    });
    
    // return ['repo1', 'repo2', 'repo3'];
}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling Github API...');
            resolve(['commit']);
        }, 2000);
    });
    
}