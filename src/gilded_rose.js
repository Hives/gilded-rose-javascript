class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    var that = this;
    this.items.forEach(function(item) {

      switch (item.name) {
        case "Sulfuras, Hand of Ragnaros":
          break;
        case "Aged Brie":
          that._updateQualityAgedBrie(item);
          break;
        case "Backstage passes to a TAFKAL80ETC concert":
          that._updateQualityBackstagePass(item)
          break;
        case "Conjured item":
          that._updateQualityConjuredItem(item);
          break;
        default:
          that._updateQualityNormalItem(item)
      }

      that._updateSellIn(item)

    });

    return this.items;
  }

  _updateSellIn(item) {
    if (item.name != 'Sulfuras, Hand of Ragnaros') {
      item.sellIn -= 1;
    }
  }

  _updateQualityAgedBrie(item) {
    if (item.sellIn <= 0) {
      this._incrementQuality(item, 2)
    } else {
      this._incrementQuality(item, 1)
    }
  }

  _updateQualityBackstagePass(item) {
    if (item.sellIn <= 0) {
      item.quality = 0;
    } else if (item.sellIn > 0 && item.sellIn <= 5) {
      this._incrementQuality(item, 3)
    } else if (item.sellIn > 5 && item.sellIn <= 10) {
      this._incrementQuality(item, 2)
    } else if (item.sellIn > 10) {
      this._incrementQuality(item, 1)
    }
  }

  _updateQualityConjuredItem(item) {
    if (item.sellIn < 1) {
      this._incrementQuality(item, -4)
    } else {
      this._incrementQuality(item, -2)
    }
  }

  _updateQualityNormalItem(item) {
    if (item.sellIn < 1) {
      this._incrementQuality(item, -2)
    } else {
      this._incrementQuality(item, -1)
    }
  }

  _incrementQuality(item, amount) {
    item.quality += amount
    item.quality = Math.min(item.quality, 50)
    item.quality = Math.max(item.quality, 0)
  }
}

module.exports = {
  Item,
  Shop
}
