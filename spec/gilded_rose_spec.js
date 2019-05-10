var { Shop, Item } = require('../src/gilded_rose.js')
describe('Gilded Rose', function () {
  var gildedRose, items

  describe('updating a normal object', function () {
    beforeEach(function () {
      gildedRose = new Shop([ new Item('foo', 10, 10) ])
      items = gildedRose.updateQuality()
    })

    it('has a name', function () {
      expect(items[0].name).toEqual('foo')
    })

    it('the quality decreases by 1', function () {
      expect(items[0].quality).toEqual(9)
    })

    it('the sell by date decreases by 1', function () {
      expect(items[0].sellIn).toEqual(9)
    })

    it('once the sell by date is reached it degrades twice as fast', function () {
      gildedRose = new Shop([ new Item('foo', 0, 10) ])
      items = gildedRose.updateQuality()
      expect(items[0].quality).toEqual(8)
    })

    it("the quality can't decrease below zero", function () {
      gildedRose = new Shop([ new Item('foo', 10, 0) ])
      items = gildedRose.updateQuality()
      expect(items[0].quality).toEqual(0)
    })
  })

  describe('updating a conjured object', function () {
    beforeEach(function () {
      gildedRose = new Shop([ new Item('Conjured item', 10, 10) ])
      items = gildedRose.updateQuality()
    })

    it('has a name', function () {
      expect(items[0].name).toEqual('Conjured item')
    })

    it('the quality decreases by 2', function () {
      expect(items[0].quality).toEqual(8)
    })

    it('the sell by date decreases by 1', function () {
      expect(items[0].sellIn).toEqual(9)
    })

    it('once the sell by date is reached it degrades twice as fast', function () {
      gildedRose = new Shop([ new Item('Conjured item', 0, 10) ])
      items = gildedRose.updateQuality()
      expect(items[0].quality).toEqual(6)
    })

    it("the quality can't decrease below zero", function () {
      gildedRose = new Shop([ new Item('Conjured item', 10, 0) ])
      items = gildedRose.updateQuality()
      expect(items[0].quality).toEqual(0)
    })
  })

  describe('updating Aged Brie', function () {
    beforeEach(function () {
      gildedRose = new Shop([ new Item('Aged Brie', 10, 10) ])
      items = gildedRose.updateQuality()
    })

    it('has a name', function () {
      expect(items[0].name).toEqual('Aged Brie')
    })

    it('the quality increases by 1', function () {
      expect(items[0].quality).toEqual(11)
    })

    it('the quality increases by 2 after the sell by date', function () {
      gildedRose = new Shop([ new Item('Aged Brie', 0, 10) ])
      items = gildedRose.updateQuality()
      expect(items[0].quality).toEqual(12)
    })

    it('the sell by date decreases by 1', function () {
      expect(items[0].sellIn).toEqual(9)
    })

    it("the quality can't increase beyond 50", function () {
      gildedRose = new Shop([ new Item('Aged Brie', 10, 50) ])
      items = gildedRose.updateQuality()
      expect(items[0].quality).toEqual(50)
    })
  })

  describe('updating Sulfuras, Hand of Ragnaros', function () {
    beforeEach(function () {
      gildedRose = new Shop([ new Item('Sulfuras, Hand of Ragnaros', 10, 10) ])
      items = gildedRose.updateQuality()
    })

    it('has a name', function () {
      expect(items[0].name).toEqual('Sulfuras, Hand of Ragnaros')
    })

    it('the quality does not change', function () {
      expect(items[0].quality).toEqual(10)
    })

    it('the sell by date does not change', function () {
      expect(items[0].sellIn).toEqual(10)
    })
  })

  describe('updating Backstage passes...', function () {
    it('has a name', function () {
      gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 10, 10) ])
      items = gildedRose.updateQuality()
      expect(items[0].name).toEqual('Backstage passes to a TAFKAL80ETC concert')
    })

    it('the sell by date decreases by 1', function () {
      gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 10, 10) ])
      items = gildedRose.updateQuality()
      expect(items[0].sellIn).toEqual(9)
    })

    it('the quality increases by 1 if sellIn > 10', function () {
      gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 11, 10) ])
      items = gildedRose.updateQuality()
      expect(items[0].quality).toEqual(11)
    })

    it('the quality increases by 2 if sellIn = 10', function () {
      gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 10, 10) ])
      items = gildedRose.updateQuality()
      expect(items[0].quality).toEqual(12)
    })

    it('the quality increases by 2 if sellIn = 6', function () {
      gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 6, 10) ])
      items = gildedRose.updateQuality()
      expect(items[0].quality).toEqual(12)
    })

    it('the quality increases by 3 if sellIn = 5', function () {
      gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 5, 10) ])
      items = gildedRose.updateQuality()
      expect(items[0].quality).toEqual(13)
    })

    it('the quality increases by 3 if sellIn = 1', function () {
      gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 1, 10) ])
      items = gildedRose.updateQuality()
      expect(items[0].quality).toEqual(13)
    })

    it('the quality drops to 0 if sellIn = 0', function () {
      gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10) ])
      items = gildedRose.updateQuality()
      expect(items[0].quality).toEqual(0)
    })

    it("the quality doesn't drop below 0", function () {
      gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10) ])
      items = gildedRose.updateQuality()
      items = gildedRose.updateQuality()
      expect(items[0].quality).toEqual(0)
    })
  })
})
