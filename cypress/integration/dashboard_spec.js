describe('Dashboard', () => {
  it('should be able to visit localhost:3000 and see the dashboard displayed', () => {
    cy.visit('http://localhost:3000')
      .contains('Stanky Pomodoros')
      .get('.dashboard')
  });

  it('should display a list of movies within dashboard', () => {
    cy.visit('http://localhost:3000')
      .get('.movie-list')
      .get('.movie-card')
  });

  it.skip('should have a sidebar that is hidden by default', () => {
    cy.visit('http://localhost:3000')
      .get('nav.sidebar')
  });

  it.skip('should display a slideshow at the top of the dashboard', () => {
    cy.visit('http://localhost:3000')
      .get('.slideshow')
      .get('h2')
  });

  it('should be able to change views to a single view after clicking on a movie', () => {
    cy.visit('http://localhost:3000')
      .get('#581392')
      .click()
      .get('.overview')
      .siblings('.budget')
      .siblings('.average_rating')
      .siblings('.runtime')
      .siblings('.revenue')
      .siblings('.overrelease_dateview')
      .siblings('.genres')
  });

  it.skip('should be able to click the X to return to the dashboard view', () => {

  });

  it.skip('should have filter options above the movie list', () => {

  });

  it.skip('should be able to change order of movies based on filter option', () => {

  });


  //single view
  it.skip('should display a backdrop image with title at the top', () => {

  });

  it.skip('should contain movie details grouped underneath', () => {

  });

});
