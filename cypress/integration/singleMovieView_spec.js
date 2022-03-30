describe('Dashboard', () => {

  it.skip('Should ', () => {

  });

  it.skip('', () => {

  });

  it('should contain movie details grouped underneath', () => {
    cy.visit('http://localhost:3000/movie/581392')
        .get('.overview')
        .siblings('.budget')
        .siblings('.average_rating')
        .siblings('.runtime')
        .siblings('.revenue')
        .siblings('.overrelease_dateview')
        .siblings('.genres')
  });

  it('should be able to click the X to return to the dashboard view', () => {
    cy.visit('http://localhost:3000/movie/581392')
        .get('.exit-single-movie-view')
        .click()
          .get('.dashboard')
  });

  it('should display a backdrop image with title at the top', () => {
    cy.visit('http://localhost:3000/movie/581392')
      .get('.backdrop')
      .should('have.css', 'background-image')
      .get('h2')
  });

  it.skip('', () => {

  });

});
