describe("大拇指点赞 functions", function() {
    it("点赞加一", function() {
        expect(1).toEqual((new PraiseButton(0)).favour());
    });
});