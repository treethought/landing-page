# contributing copy notes

## before anything

in terminal ..

**navigate to the repo's directory**

`cd landing-page`

**verify that your're on master**

```bash
git branch
```

and check that its master, if not, then run

```bash
git checkout master
```

**update your local repo, with the up-to-date github repo**

```bash
git pull origin master
```

and install any new dependencies

```bash
npm i
```

.. and now you have up to date master

**start local instance of the landing-page**

```
npm start
```

and then visit http://localhost:9966

## i want to add/modify copy to the website

**branch off master**

```bash
git checkout -b copy/a-nice-name
```

**open project in atom**

```bash
atom .
```

**global search for not ok copy or copy around the place that you wanna add copy**

in atom ..

`CMD + SHIFT + F`

copy / paste copy, and enter to find

click on matching file

make edits that you want

and repeat as needed ..

**commit your changes**

go back to terminal and ..

```bash
git status
```

.. to see the things you changed

```bash
git add -A
```

.. to 'stage' all the changes you've made

```bash
git commit -m "some nice descriptive message about your changes"
```

**push your commits to github**

```bash
git push origin copy/a-nice-name
```

**pull request your pushed branch against master**

visit our github repo,

find your branch

click the green pull request button

write any level of description that you want

create pull request (another green btn)

_dont_ press merge

---

at this point, everyoone gets an email that a PR has been made

eugene looks at the PR, and verifies that nothing is broken

eugene merges if its all good

everyone gets an automatic email notification and a _bananya_




## i want to change assets on the website (imgs, colors, etc)

---

## footnotes

to verify that you're on the right branch, can run

```bash
git branch
```
