/* global algoliasearch instantsearch */

const searchClient = algoliasearch(
  'N8NI9VRBU1',
  'fba347501ce93182f89978a9f95e17d4'
);

const search = instantsearch({
  indexName: 'git_station',
  searchClient,
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
    placeholder: 'What are you looking for?',
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
<div class="card">
          <div class="card_body">
            <h2 class="title">
            {{#helpers.highlight}}{ "attribute": "title" }{{/helpers.highlight}}
            </h2>
            <div class="git_code_container">
              <code id="copy">
              {{#helpers.highlight}}{ "attribute": "gitCommand" }{{/helpers.highlight}}
              </code>
              <button id="copybtn" onclick="copyCode()" >copy</button>
            </div>
          </div>
        </div>
`,
    },
  }),
]);

search.start();
