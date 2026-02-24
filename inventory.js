// ============================================
// LESSON 6: Inventory + Order Queue + Dispatch Stack
// ============================================

// Data structures
const inventory = [];
const orderQueue = [];
const dispatchStack = [];

// ============================================
// PART 1: INVENTORY MANAGEMENT
// ============================================

// 1) Add Product to inventory
// Step-by-step instructions:
// 1. Loop through the inventory array to check if a product with the given id already exists.
// 2. If a product with the same id is found, print a message like "Product with ID {id} already exists." and return.
// 3. If no product with that id exists, create a new product object with properties: id, name, category, price, quantity.
// 4. Add the new product object to the inventory array.
// 5. Optionally, print a success message like "Product added successfully."

function addProduct(id, name, category, price, quantity) {
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].id == id) {
            console.log("Product with ID " + id + " already exists.");
            return;
        }
    }

    const newProduct = {
        id: id,
        name: name,
        category: category,
        price: price,
        quantity: quantity
    };

    inventory.push(newProduct);
    console.log("Product added successfully.");
}
// console.log("addProduct test:", addProduct(10, "Keyboard", "Electronics", 45.99, 8));

// 2) Update Product fields
// Step-by-step instructions:
// 1. Loop through the inventory array to find the product with the matching id.
// 2. If no product with that id is found, print a message like "Product with ID {id} not found." and return.
// 3. If the product is found, loop through the keys of the updates object (e.g., price, category, quantity).
// 4. For each key in updates, set the corresponding property on the product object.
// 5. Optionally, print a success message like "Product updated successfully."
function updateProduct(id, updates) {
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].id == id) {
            if (updates.price !== undefined) {
                inventory[i].price = updates.price;
            }

            if (updates.category !== undefined) {
                inventory[i].category = updates.category;
            }

            if (updates.quantity !== undefined) {
                inventory[i].quantity = updates.quantity;
            }

            console.log("Product updated successfully.");
            return;
        }
    }

    console.log("Product with ID " + id + " not found.");
}
// console.log("updateProduct test:", updateProduct(1, { quantity: 7 }));

// 3) Delete Product from inventory
// Step-by-step instructions:
// 1. Loop through the inventory array to find the index of the product with the matching id.
// 2. If no product with that id is found, print a message like "Product with ID {id} not found." and return.
// 3. If the product is found, use the splice method to remove it from the inventory array at the found index.
// 4. Optionally, print a success message like "Product deleted successfully."

function deleteProduct(id) {
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].id == id) {
            inventory.splice(i, 1);
            console.log("Product deleted successfully.");
            return;
        }
    }
    console.log("Product with ID " + id + " not found.");
}
// console.log("deleteProduct test:", deleteProduct(2));

// 4) Search Products
// Search by name (exact match) - return single product or null
// Step-by-step instructions:
// 1. Loop through the inventory array.
// 2. For each product, check if product.name is exactly equal to the provided name.
// 3. If a match is found, return the product object.
// 4. If no match is found after looping through all products, return null.

function searchByName(name) {
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].name == name) {
            return inventory[i];
        }
    }
    return null;
}
// console.log("searchByName test:", searchByName("Laptop"));


// Search by category (exact match) - return array of products
// Step-by-step instructions:
// 1. Initialize an empty array called results to store matching products.
// 2. Loop through the inventory array.
// 3. For each product, check if product.category is exactly equal to the provided category.
// 4. If it matches, push the product object into the results array.
// 5. After looping, return the results array (which may be empty if no matches).

function searchByCategory(category) {
    const results = [];
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].category == category) {
            results.push(inventory[i]);
        }
    }

    return results;
}
// console.log("searchByCategory test:", searchByCategory("Electronics"));

// 5) Sort Inventory
// Do NOT use built-in sort(), write your own sorting algorithm
// Swap entire product objects

// Sort by price ascending
// Step-by-step instructions:
// 1. Get the length of the inventory array.
// 2. Use a nested loop for bubble sort: outer loop from 0 to length-1, inner loop from 0 to length-i-1.
// 3. In the inner loop, compare inventory[j].price with inventory[j+1].price.
// 4. If inventory[j].price > inventory[j+1].price, swap the two product objects.
// 5. Continue until the array is sorted in ascending order by price.
// TODO: implement (bubble sort or similar)
function sortByPrice() {
        const n = inventory.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (inventory[j].price > inventory[j + 1].price) {
                    const temp = inventory[j];
                    inventory[j] = inventory[j + 1];
                    inventory[j + 1] = temp;
                }
            }
        }           
}
    // console.log("Before sortByPrice:", inventory);
    // sortByPrice();
    // console.log("After sortByPrice:", inventory);

// Sort by name A→Z
// Step-by-step instructions:
// 1. Get the length of the inventory array.
// 2. Use a nested loop for bubble sort: outer loop from 0 to length-1, inner loop from 0 to length-i-1.
// 3. In the inner loop, compare inventory[j].name with inventory[j+1].name using string comparison.
// 4. If inventory[j].name > inventory[j+1].name (lexicographically), swap the two product objects.
// 5. Continue until the array is sorted in ascending alphabetical order by name.
// TODO: implement
function sortByName() {
        const n = inventory.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (inventory[j].name > inventory[j + 1].name) {
                    const temp = inventory[j];
                    inventory[j] = inventory[j + 1];
                    inventory[j + 1] = temp;
                }
            }   
        }
    }
// console.log("Before sortByName:", inventory);
// sortByName();
// console.log("After sortByName:", inventory);

   

// Sort by category A→Z
// Step-by-step instructions:
// 1. Get the length of the inventory array.
// 2. Use a nested loop for bubble sort: outer loop from 0 to length-1, inner loop from 0 to length-i-1.
// 3. In the inner loop, compare inventory[j].category with inventory[j+1].category using string comparison.
// 4. If inventory[j].category > inventory[j+1].category (lexicographically), swap the two product objects.
// 5. Continue until the array is sorted in ascending alphabetical order by category.
// TODO: implement

function sortByCategory() {
        const n = inventory.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (inventory[j].category > inventory[j + 1].category) {
                    const temp = inventory[j];
                    inventory[j] = inventory[j + 1];
                    inventory[j + 1] = temp;
                }
            }   
        }   
    
}
    // console.log("Before sortByCategory:", inventory);
    // sortByCategory();
    // console.log("After sortByCategory:", inventory);


// ============================================
// PART 2: ORDER QUEUE (FIFO)
// ============================================

// 6) Place Order (Enqueue)
// Validate quantity > 0
// Add to END of orderQueue
// Step-by-step instructions:
// 1. Check if the quantity is greater than 0. If not, print an error message like "Invalid quantity: must be greater than 0." and return.
// 2. Create a new order object with properties: orderId, productId, quantity.
// 3. Add (push) the order object to the end of the orderQueue array.
// 4. Optionally, print a success message like "Order placed successfully."
// TODO: implement

function placeOrder(orderId, productId, quantity) {
    if (quantity <= 0) {
        console.log("Invalid quantity: must be greater than 0.");
        return;
    }

    const newOrder = {
        orderId: orderId,
        productId: productId,
        quantity: quantity
    };

    orderQueue.push(newOrder);
    console.log("Order placed successfully.");
}
// console.log("placeOrder test:", placeOrder(201, 1, 2));
// console.log("Order queue now:", orderQueue);

// 7) Process Next Order (Dequeue → Dispatch)
// Remove from FRONT of queue
// Check if product exists and has enough stock
// If valid: reduce inventory quantity, move to dispatchStack
// If invalid: handle accordingly (print message, decide what to do with order)
// Step-by-step instructions:
// 1. Check if the orderQueue is empty. If yes, print "No orders to process." and return.
// 2. Dequeue the order from the front of orderQueue using shift().
// 3. Find the product in inventory by matching productId.
// 4. If product not found, print "Product not found for order {orderId}." and decide (e.g., discard or put back).
// 5. If product found, check if order.quantity <= product.quantity.
// 6. If sufficient stock, reduce product.quantity by order.quantity, and push the order to dispatchStack.
// 7. If insufficient stock, print "Insufficient stock for order {orderId}." and decide (e.g., put back to queue or discard).
// TODO: implement

function processNextOrder() {
    if (orderQueue.length === 0) {
        console.log("No orders to process.");
        return;
    }

    const nextOrder = orderQueue.shift();
    let product = null;

    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].id == nextOrder.productId) {
            product = inventory[i];
            break;
        }
    }

    if (product === null) {
        console.log("Product not found for order " + nextOrder.orderId + ".");
        return;
    }

    if (nextOrder.quantity > product.quantity) {
        console.log("Insufficient stock for order " + nextOrder.orderId + ".");
        return;
    }

    product.quantity = product.quantity - nextOrder.quantity;
    dispatchStack.push(nextOrder);
    console.log("Order processed and moved to dispatch stack.");
}
// processNextOrder();
// console.log("Inventory after processNextOrder:", inventory);
// console.log("Dispatch stack after processNextOrder:", dispatchStack);

// ============================================
// PART 3: DISPATCH STACK (LIFO)
// ============================================

// 8) Undo Last Dispatch (Stack → Queue)
// Remove from TOP of stack (LIFO)
// Restore product quantity
// Put order back at BACK of orderQueue
// Step-by-step instructions:
// 1. Check if the dispatchStack is empty. If yes, print "No dispatches to undo." and return.
// 2. Pop the last dispatched order from the top of dispatchStack.
// 3. Find the product in inventory by matching the order's productId.
// 4. If product found, restore the quantity by adding back order.quantity to product.quantity.
// 5. Push the order back to the end of orderQueue.
// 6. Optionally, print a success message like "Last dispatch undone."
// TODO: implement

function undoLastDispatch() {
    if (dispatchStack.length === 0) {
        console.log("No dispatches to undo.");
        return;
    }

    const lastDispatch = dispatchStack.pop();
    let product = null;

    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].id == lastDispatch.productId) {
            product = inventory[i];
            break;
        }
    }

    if (product !== null) {
        product.quantity = product.quantity + lastDispatch.quantity;
    }

    orderQueue.unshift(lastDispatch);
    console.log("Last dispatch undone.");
}
// undoLastDispatch();
// console.log("Order queue after undoLastDispatch:", orderQueue);
// console.log("Inventory after undoLastDispatch:", inventory);

// ============================================
// TEST CALLS (Provided for verification)
// ============================================

// Uncomment and use these to test your implementations
addProduct(1, "Laptop", "Electronics", 999.99, 5);
addProduct(2, "Mouse", "Electronics", 25.50, 20);
addProduct(3, "Desk", "Furniture", 299.99, 3);

console.log("Inventory after adding:", inventory);

updateProduct(1, { quantity: 3 });
console.log("After updating product 1:", inventory[0]);

placeOrder(101, 1, 2);
placeOrder(102, 2, 5);
console.log("Order queue:", orderQueue);

processNextOrder();
console.log("Inventory after processing:", inventory);
console.log("Dispatch stack:", dispatchStack);

undoLastDispatch();
console.log("After undo - order queue:", orderQueue);
console.log("After undo - inventory:", inventory);

