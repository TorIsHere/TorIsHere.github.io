---
layout: post
title:  "Swift: Horizontal UIPickerView!"
date:   2015-02-12 18:17:42
categories: Swift
---
At the time I write this post, there is no easy/official library from `apple` to use as a horizontal list picker. 
However there is somw work around that you can do to make something similar.

Starting from using [UIPickerView][UIPickerView].

## Good ot KNOW
The acceptable height for [UIPickerView][UIPickerView] / [UIDatePicker][UIDatePicker] is

* `162`
* `180`
* `216`

Even you try to programitically change the size it will change it back.

# Let us begin
First, let's start from create a vertical UIPickerView

## Vertical UIPickerView

### 1. Drag and drop Picker View


### 2. Implement UIPickerViewDelegate, UIPickerViewDataSource

{% highlight swift %}
import UIKit

class ViewController: UIViewController, UIPickerViewDelegate, UIPickerViewDataSource {

    @IBOutlet weak var myPickerView: UIPickerView!
    
    let Data = ["A", "B", "C", "D", "E", "F", "G"]
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        self.myPickerView.dataSource = self
        self.myPickerView.delegate   = self
        
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    // UIPickerViewDataSource
    func numberOfComponentsInPickerView(pickerView: UIPickerView) -> Int {
        return 1
    }
    
    func pickerView(pickerView: UIPickerView,
        rowHeightForComponent component: Int) -> CGFloat{
            return 24.0
    }
    
    // UIPickerViewDelegate
    func pickerView(pickerView: UIPickerView,
        numberOfRowsInComponent component: Int) -> Int {
            return Data.count
    }
    
    func pickerView(pickerView: UIPickerView, titleForRow row: Int, forComponent component: Int) -> String! {
      return Data[row]
    }
}

{% endhighlight %}

#### Create Data
{% highlight swift%}
    let Data = ["A", "B", "C", "D", "E", "F", "G"]
{% endhighlight %}

#### Assign Data
{% highlight swift%}
    func pickerView(pickerView: UIPickerView, titleForRow row: Int, forComponent component: Int) -> String! {
      return Data[row]
    }
{% endhighlight %}


Now we have a picker.

## 3. Now let's make it horizontal

{% highlight swift %}
    func flipPicker() {
        let screenRect:CGRect = UIScreen.mainScreen().bounds
        let screenWidth:CGFloat = screenRect.size.width
        self.myPickerView.delegate = self
        self.myPickerView.dataSource = self
        self.myPickerView.frame = CGRectMake(0, 0, 24.0, 216.0);
        self.myPickerView.transform = CGAffineTransformRotate(self.myPickerView.transform, CGFloat(-M_PI/2))
        self.myPickerView.reloadAllComponents()
    }
{% endhighlight %}



[UIPickerView]: https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIPickerView_Class/index.html
[UIDatePicker]: https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIDatePicker_Class/index.html
