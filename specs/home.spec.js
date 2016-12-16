describe('Verify elements on HOME screen', function(){
  beforeEach(function(){
    browser.get('http://www.okonyk.com:3030');
    browser.waitForAngular();
  });
    
  it('Should show 6 featured playlists', function(){
    var ratings = element.all(by.repeater('playlist in $ctrl.featuredPlaylists'));
    expect(ratings.count()).toBe(6);
  });
});
