describe("A Product",function(){
	it("should be marked as discontinued when discontinued",function(){
		var p = new Product();
		p.discontinue();
		expect(p.isDiscontinued).toBe(true);
	});
});