var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "ga-paper-2",
  "level": "1",
  "url": "ga-paper-2.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "  Micah Dykhuis      "
},
{
  "id": "ga-paper-3",
  "level": "1",
  "url": "ga-paper-3.html",
  "type": "Section",
  "number": "1",
  "title": "Introduction",
  "body": " Introduction  Geometric Algebra is the study of the Geometric and Physical applications of Clifford Algebras. In fact, the term Geometric Algebra was originally suggested by William Clifford, the founder of Clifford Algebra. For the remainder of this paper, the terms Geometric Algebra and Clifford Algebra will be used interchangeably. Additionally, we will only be talking about finite dimensional Geometric Algebras, as infinite dimensional Geometric Algebras lack a few nice properties, such as having a well defined duality and nice pseudovectors. These properties will be further explained later.  Geometric Algebra is a powerful mathematical tool for intuitively modelling many useful systems and tools, especially in physics. Because of its simplicity and penchant for intuition, Geometric Algebra is popular among Physicists, however I believe that the theory behind it is just as beautiful.  We will begin by discussing what useful features someone might look for in an algebra. Then, we will define a Geometric Algebra, and show some of its basic operations. We will generate a basis for a Geometric Algebra. Next, we will discuss reflections in Geometric Algebra and how to compute them. Finally, we will explore Rotors, a powerfully simple tool for rotations in any Geometric Algebra. We will also overview some other interesting topics of Geometric Algebra for further research.   Why Geometric Algebra?  If you were building a new Algebra from scratch, what would you want to include? There are many useful properties for an algebra to have. Being a ring with identity is useful. Being compatible with many transcendental functions is also a very nice bonus. Being easy to compute would be good. Geometric Algebra has all of these properties, but the main three qualities that I would like to highlight are:   Built from any arbitrary Vector Space  By definition, every algebra is inherently a vector space with a multiplication operator. Therefore, it would be useful to be able to construct our algebra starting from any arbitrary vector space. When this underlying space is finite-dimensional, it allows for a finite basis from which we can build all elements of the algebra. This foundation allows us to define orthogonality by simply borrowing it from the underlying vector space. Orthogonality is crucial to constructing a Geometric Algebra.    Algebra Between Elements of Different Dimensions  Can you multiply a matrix and a vector? Sometimes, if they are of the right dimension. Can you subtract a vector from a matrix? Under most vector spaces, that is nonsense. In Geometric Algebra, you can take two objects of different dimensions (in this case, grade, which we will discuss later on) and multiply them together to get something meaningful.    Geometric Intuition  Plenty of Algebras have an intuitive Geometric meaning, and Geometric Algebra is no exception. To rotate a complex number by 90 degrees, one can simply multiply it by the imaginary number . Geometric Algebra has something similar, though arguably more powerful, called a rotor. If we would like to rotate any multivector by any number of degrees along any axis, we can simply take the sandwhich product of it and the corresponding rotor . That is, the rotated multivector can be represented as . The idea of a Rotor acting on a vector via the sandwhich product is the primary topic that we will be building to.    "
},
{
  "id": "ga-paper-4",
  "level": "1",
  "url": "ga-paper-4.html",
  "type": "Section",
  "number": "2",
  "title": "Building a Geometric Algebra",
  "body": " Building a Geometric Algebra  Let us now build our first Geometric Algebra! The notation of a Geometric Algebra is , such that there are basis vectors that square to , basis vectors that square to , and basis vectors that square to . We will discuss what squaring means in this context shortly.  We will focus on , as it is not as trivial as , and is a good representation of the 3-dimensional world. Being a representation of the 3-dimensional world, we will begin by defining as being the orthogonal basis vectors of this Geometric Algebra. You can think of as analagous to the first basis vector of , with being the second and third, respectively. If I wanted to represent the vector in , we would write as . But what does it mean for two basis vectors to be orthogonal in a Geometric Algebra? For that, we need to discuss the Geometric Product.   The Geometric Product  The Geometric Product can be defined over the basis vectors in two ways. In general, the Geometric product satisfies two properties:   Orthonormal Squaring : Any basis vector squared with itself is equal to a scalar. This scalar can be 1, -1, or 0, depending on the Geometric Algebra and specific vector. In , all three vectors square to 1.   Anticommutivity : Any two orthogonal vectors anticommute. For example, the Geometric Product, is equal to . Please note that if two vectors are parallel, then they commute.  A far more intuitive way to conceptualize the Geometric Product on any vectors is through the inner and outer product. We will define the geometric product between two vectors, as, such that is the inner product and is the outer product. The inner product is trivial, as it is simply the magnitude of both of the vectors multiplied together with the cosine of the angle between them. In a sense, it is a measure of how orthogonal two vectors are. The outer product is less simple. The magnitude of the outer product is simply the magnitude of the two vectors multiplied by the sine of the angle between them. In a sense, the magnitude of the outer product is a measure of how parallel two vectors are. However, it is far more than just that measure.  For any two vectors, their outer product is the area formed by the parallelogram with the two vectors as legs (as seen in ). This means that the outer product of a vector and itself is simply 0. The area has three main characteristics. The first being the magnitude of the area. The second being the handedness of the area. This is often represented by a directed circle within it, or algebraically as a positive or negative sign. Finally, the area is also defined by its orientation. An area that is translated to a different location on a plane is equal to the original area, but an area shifted to a different plane is not equal to its original area. Notice that the shape of these areas don't actually matter, as they are not defined by that characteristic. We call these special oriented areas bi-vectors .   On the right are two non-parralel vectors in , while on the right is the bi-vector generated by their outer product.    Vectors in     Oriented Area \/ bi-vector      The outer product of three non-parallel vectors in such that would then be an oriented volume, also known as a tri-vector. This can be generalized to any arbitrary dimension, up to the dimension of the original vector space. We call these general -vectors blades . A vector would be a 1-blade, a bi-vector a 2-blade, and so on and so forth. By some abuse of notation, we can even call a scalar a 0-blade. It is far easier to represent -blades as the outer product of orthogonal basis vectors. We would simply write the blade formed by the outer product of basis vectors as . The number of basis vectors required to form a blade by the outer product is called the grade of the blade.  With our new definitions of inner and outer products, let us find a Geometric Product. in , we will define , and . We will now find, It is trivial to find the inner product by the standard definition given in linear algebra. Thus, . The outer product is nearly as simple. The outer product distributes over addition, so we can simply distribute the components of over . Keeping in mind that the outer product of any vector with itself is 0, we can see that . This is a single quantity, but much like our vectors, it is far easier to represent it as a linear combination of blades. In this case, instead of being represented by 1-blades (vectors), it is represented by 2-blades (bi-vectors). Adding these two quantities together, we obtain, Strangely, we have added a scalar with a bi-vector. How can that make any sense? Similar to adding real and imaginary numbers, we can simply write them as added with an addition sign and call it a single value. Representing the output of the Geometric Product as a single value, with components of different blades, is extremely useful. We call elements that are the sum of multiple different blades a , and they are the most general element of a geometric algebra.  Please note that the Geometric Product is only equal to the sum of the dot product and outer product when between two vectors. The Geometric Product between any two general multi-vectors is not the sum of the dot product and outer product. Thankfully, we can break down any blade, and hence any multi-vector, into the geometric product of orthogonal basis vectors, so in practice this is not a problem.  Another interesting fact is that the geometric product of any two orthogonal vectors is simply their outer product. Therefore, it is common practice to write blades as the geometric product of orthogonal basis vectors. For example, in , the bi-vector representing a positively oriented area of 1 on the plane can be represented as .    The Basis and Dimension of a Geometric Algebra  Now that we have established the geometric product and its components, we can look at the algebra as a whole. We now come to a new question: if we start with orthogonal basis vectors in our underlying vector space, how many independent basis elements are in the resulting Geometric Algebra?  Because we can form new elements by taking the outer product of our basis vectors (forming bivectors, trivectors, etc.), the total dimension of the algebra are determined as binomial coefficients. For an -dimensional vector space, there is scalar, basis vectors, basis bivectors, all the way up to  -blades. Summing these binomial coefficients gives us a total dimension of .  Let us apply this to the Geometric Algebra representing 3D Euclidean space, . Since , the Geometric Algebra is a vector space of dimension . We can then list the basis blades of by their grade:   Grade 0 (Scalar):   Grade 1 (Vectors):   Grade 2 (Bivectors):   Grade 3 (Trivector):       0-Blade, The Origin.     3 1-Blades, Vectors.       All 8 basis elements of . The arrows and helix in the 2-blades and 3-blades represent positive orientation.    3 2-Blades, Oriented Areas.     3-Blade, Oriented Volume.      Any general multivector in is simply a linear combination of these 8 basis elements.  The highest-grade blade in any Geometric Algebra is special and is called the Pseudoscalar , usually denoted by . In , the pseudoscalar is the oriented volume . The pseudoscalar has many interesting properties. One of which is, that if you calculate the geometric product of with itself, you obtain: . In , this makes act very similarly to the imaginary number! Another useful property of pseudoscalars is that, multiplying any multivector by finds its orthogonal complement. In Geomatric Algebra, this concept is called duality .  The concept of duality is extremely useful in many fields, one of which beings physics. In physics, angular momentum and magnetic fields are often called \"axial vectors\" or \"pseudovectors\" because they act like vectors but do not perfectly mirror across planes. In Geometric Algebra, these quantities are actually bivectors! By multiplying a bivector by the additive inverse of the pseudoscalar, we find its dual . Additionally, the standard cross product is just the dual of the outer product: . Geometric algebra removes the need for the right-hand rule and axial-vectors. Instead, it replaces them with bi-vectors that can be easily generalized.   "
},
{
  "id": "Outer-Product",
  "level": "2",
  "url": "ga-paper-4.html#Outer-Product",
  "type": "Figure",
  "number": "2.1",
  "title": "",
  "body": " On the right are two non-parralel vectors in , while on the right is the bi-vector generated by their outer product.    Vectors in     Oriented Area \/ bi-vector     "
},
{
  "id": "Basis1",
  "level": "2",
  "url": "ga-paper-4.html#Basis1",
  "type": "Figure",
  "number": "2.2",
  "title": "",
  "body": "   0-Blade, The Origin.     3 1-Blades, Vectors.     "
},
{
  "id": "Basis2",
  "level": "2",
  "url": "ga-paper-4.html#Basis2",
  "type": "Figure",
  "number": "2.3",
  "title": "",
  "body": " All 8 basis elements of . The arrows and helix in the 2-blades and 3-blades represent positive orientation.    3 2-Blades, Oriented Areas.     3-Blade, Oriented Volume.     "
},
{
  "id": "ga-paper-5",
  "level": "1",
  "url": "ga-paper-5.html",
  "type": "Section",
  "number": "3",
  "title": "Reflections",
  "body": " Reflections  In traditional linear algebra, reflecting a vector across a plane usually requires the projection formula. In Geometric Algebra, however, the geometric product allows us to express reflections as a sandwhich product.  Let's assume that we have a vector that we would like to reflect across a plane (in dimensions , we can use hyperplanes, which are higher dimensional planes). We can define this plane by its normal vector (it's dual, or orthogonal complement.): . To simplify the math, we can assume is a unit vector. This means that . In Geometric Algebra, the reflected vector is given by the formula:   Let's break down why this formula works. We can decompose our vector into two parts. These parts are a component parallel to the normal vector ( ) and a component orthogonal to the normal vector ( ). Thus, .  Remember the rules for the geometric product: parallel vectors commute, so . Conversely, orthogonal vectors anticommute, meaning . Using these rules, we can apply the reflection formula to the parallel and orthogonal components.    We can then add our seperate components back together, obtaining . The component that is parallel to the normal vector is flipped, while the component orthogonal to the normal vector is unchanged. Thus, we have reflected across the plane, as seen in .   A reflection of a vector (blue), across a plane (grey), to obtain a reflected vector, (purple). The black vector is the normal of the plane. The green and red vectors are the components of the blue vector orthogonal and parralel to the normal vector, respectively. The maroon vector is the negative of the parralel component.    Although reflections are very useful in Geometric Algebra, they are especially useful when combined with other reflections. A pertinent theorem to this is the Cartan-Dieudonné theorem, which states that any rotation can be constructed by combining reflections. If we reflect a vector twice across two different planes with normal vectors and , then the transformed vector is in the form:   The resulting geometric product of the two normal vectors, , is called a Rotor .  "
},
{
  "id": "reflection",
  "level": "2",
  "url": "ga-paper-5.html#reflection",
  "type": "Figure",
  "number": "3.1",
  "title": "",
  "body": " A reflection of a vector (blue), across a plane (grey), to obtain a reflected vector, (purple). The black vector is the normal of the plane. The green and red vectors are the components of the blue vector orthogonal and parralel to the normal vector, respectively. The maroon vector is the negative of the parralel component.   "
},
{
  "id": "ga-paper-6",
  "level": "1",
  "url": "ga-paper-6.html",
  "type": "Section",
  "number": "4",
  "title": "Rotors and Rotations",
  "body": " Rotors and Rotations  Rotors are the easiest and most powerful way to represent rotations in Geometric Algebra.  We defined our rotor as the geometric product of two normal vectors: . Because they are both vectors, we can expand this into inner and outer products:   Because and are unit vectors, their inner product is simply , where is the angle between them. The outer product forms a bivector representing the plane of rotation. Let us define as the unit bivector representing this plane. Then . Substituting these into the equation for the rotor equation gives the equation:   Interestingly, this is equation is a generalization of Euler's formula, . Because the unit bivector squares to (similar to the imaginary number ), we can represent the rotor as the exponential: . Although is similar to the imaginary unit , it is far more powerful, as it can be used to represent a rotation in any plane in any dimension.  When we apply the sandwich product , the vector is reflected twice . This means the total angle of rotation is . In order to rotate a vector by angle , we construct a rotor with an angle of . Thus, the rotor that rotates any multivector by an angle in a plane represented by is: The reverse rotor, , has the opposite angle: .  To rotate any vector , we use the sandwhich product:   This formula rotates any vector in not only 3 dimensional space, but a space of any dimension. Rotors are just as versatile as quaternions when it comes to rotations, but have a cleaner construction and can work in any basis.  "
},
{
  "id": "ga-paper-7",
  "level": "1",
  "url": "ga-paper-7.html",
  "type": "Section",
  "number": "5",
  "title": "Further Explorations in Geometric Algebra",
  "body": " Further Explorations in Geometric Algebra  Unfortunately, we were only able to focus on Clifford Algebras over standard Euclidean space and a few applications. There are far more interesting Geometric Algebras than this, and their applications go far beyond rotations. In fact, Geometric Algebra is a quickly growing field in both math and physics. Some useful topics that I would recommend exploring are:   Spacetime Algebra (STA)  We can add an additional basis vector that squares to to form . This Geometric Algebra is a very useful representation of relativistic physics. This is known as Spacetime Algebra, which is able to combine the electric and magnetic fields into a single bivector field, denoted . Using this, Maxwell's 4 equations can be condensed into the single equation .    Projective Geometric Algebra (PGA)  From , we can add a basis vector that squares to zero . This is 3D Projective Geometric Algebra. PGA treats translations and rotations very similarly, which is useful for computer graphics and kinematics. PGA introduces motors (motion rotors) that can perform rigid body transformations with a single geometric product.    Geometric Calculus  Geometric Calculus extends Geometric Algebra to derivatives and integrals. It introduces the vector derivative, , which can work with multivectors. This combines the gradient, divergence, and curl into a single operator. Geometric Calculus also generalizes Stokes' Theorem, which also combines Green's theorem and the fundamental theorem of calculus.   "
},
{
  "id": "ga-paper-8",
  "level": "1",
  "url": "ga-paper-8.html",
  "type": "References",
  "number": "6",
  "title": "Bibliography",
  "body": " Bibliography  Arkadiusz Jadczyk. Notes on Clifford Algebras . 2019. Available at .  Pierre Renaud. CLIFFORD ALGEBRAS LECTURE NOTES ON APPLICATIONS IN PHYSICS . 2020. Available at .  David Hestenes and Garret Sobczyk. Clifford Algebra to Geometric Calculus . D. Reidel Publishing Company, Dordrecht, 1984.  sudgylacmoe. A Swift Introduction to Geometric Algebra . YouTube video. Available at .  Tevian Dray. The Geometry of the Exceptional Lie Groups . Oregon State University, 2023. Available at .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
