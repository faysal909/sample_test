# sample_test

টুকিটাকি ৫১ 

আমরা সব সময় অবজেক্ট থেকে ডাটা এক্সেস নিতে হলে (.ডট নোটেশন ব্যাবহার করবো) । তবে যখন আমরা জনাবো না যে কোন ডাটা নিয়ে কাজ করতে হবে বা ডাটা ডায়নামিক ভাবে আসবে তখন আমরা অ্যারে নোটেশন নিয়ে কাজ করবো। অ্যারে নোটেশনে ডাটা 'স্টিং আকারে পাস করতে হবে ' 

অবজেক্ট কম্পেয়ার করার জন্য আমরা JASON.stringify() দিয়ে আগে string  এ convert করার পরে করা হয় 
objeect থেকে properties name বের করার জন্য 
for(let i in object_name){
    console.log(i);
}
এইটা দিয়েই যেকোন object থেকে properties গুলো পাওয়া যাবে 

another way =>
console.log(Object.keys(object-name))
এইটার রেসাল্ট array আকারে দিবে properties name গুলা
console.log(Object.values(object-name))
এইটা দিয়ে যাস্ট values গুলা পাওয়া যাবে 






