describe('MovieList', () => {

  it('should render movie list based on filter option', () => {
    cy.visit('http://localhost:3000')
      .get('.movie-list')
        .get('.movie-card').eq(0)
        .children('h3')
        .should('contain', 'Peninsula')
        .should('not.contain', 'Away')
  });

  it('should be able to change movie list order based on filter option', () => {
    cy.visit('http://localhost:3000')
      .get('.filter-options')
      .children('#filters')
      .select('stankersToBangers')

      .get('.movie-card').eq(0)
      .children('h3')
      .should('not.contain', 'Peninsula')
      .should('contain', 'The Pale Door')
  });

  it('should be able to filter alphabetically', () => {
    cy.visit('http://localhost:3000')
      .get('#filters')
      .select('aToZ')

      .get('.movie-card').eq(0)
      .children('h3')
      .should('not.contain', 'Peninsula')
      .should('contain', '2067')
  });

  it('should be able to filter reverse alphabetically', () => {
    cy.visit('http://localhost:3000')
      .get('#filters')
      .select('zToA')

      .get('.movie-card').eq(0)
      .children('h3')
      .should('not.contain', 'Peninsula')
      .should('contain', 'Trolls World Tour')
  });

  it('should be able to search for a movie by title', () => {
    cy.visit('http://localhost:3000')
      .get('#search-bar')
      .type('p')

      .get('.movie-card')
      .should('have.length', 9)

      .get('#search-bar')
      .type('e')

      .get('.movie-card')
      .should('have.length', 1)
  });
});
