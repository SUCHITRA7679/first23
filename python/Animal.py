class Animal:
    def speak(self):
        print("Animal speaks")
class Dog(Animal):
    def bark(self):
        print("dog bargs")
d=Dog()
d.speak()
d.bark()                