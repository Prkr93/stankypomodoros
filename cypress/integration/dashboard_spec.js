describe('Dashboard', () => {
  it('should be able to visit localhost:3000 and see the dashboard displayed', () => {
    cy.visit('http://localhost:3000')
      .contains('Stanky Pomodoros')
      .get('.dashboard')
  });

  it('should display a list of movies within dashboard', () => {
    cy.visit('http://localhost:3000')
      .get('.movie-list')
      .children('.movie-card') 
  });

  it('should have a sidebar that is hidden by default', () => {
    cy.visit('http://localhost:3000')
      .get('nav')
      .should('not.be', 'visible')
  });

  it('should be able to toggle sidebar on hamburger click', () => {
    cy.visit('http://localhost:3000')
      .get('header button')
      .click()
      .should('have.class', 'active')

      .get('nav')
      .should('have.class', 'active')
  });

  it('should display a slideshow at the top of the dashboard', () => {
    cy.visit('http://localhost:3000')
      .get('.react-slideshow-wrapper')
      .children('.images-wrap')

      .get('.each-slide')
      .children('h2')
  });

  it('should have filter options above the movie list', () => {
    cy.visit('http://localhost:3000')
      .get('.filter')
      .siblings('.movie-list')
  });

  it('should be able to change views to a single view after clicking on a movie', () => {
    cy.visit('http://localhost:3000')
      .get('#581392')
      .click()
      .url().should('eq', 'http://localhost:3000/movie/581392')
  });



});
