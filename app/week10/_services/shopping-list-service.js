import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, doc } from "firebase/firestore";

//Add the getShoppingList function
// This async function retrieves all items for a specific user from Firestore.
//It takes a userId as a parameter,
//and uses it to query a subcollection named items under
//a document in the users collection with the same userId.
//It fetches the documents in the items subcollection,
//and for each document, it adds an object to the items
//array containing the document ID and data.
//It then returns this items array.

export async function getItems (userId) {
  const itemsCollectionRef = collection(db, "users", userId, "items");

  try {
    const itemsSnapshot = await getDocs(itemsCollectionRef);
    const shoppingList = itemsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return shoppingList;
  } catch (error) {
    console.error('Error getting shopping list:', error);
    throw new Error('Error getting shopping list');
  }
}


// Add the addItem function
// This function adds a new item to a specific user's list of items
//in Firestore. It takes a userId and an item as parameters. It uses the userId to reference the items subcollection of a document in the users collection, and then adds the item to this subcollection. It returns the id of the newly created document.
export async function addItem(userId, item) {
  console.log("Adding item to shopping list", item);

  try {
    // Reference the user's items subcollection
    const userItemsRef = collection(db, "users", userId, "items");

    // Add a new document to the items subcollection with the provided item data
    const newItemRef = await addDoc(userItemsRef, item);

    // Return the id of the newly created document
    return newItemRef.id;
  } catch (error) {
    console.error('Error adding item to shopping list:', error);
    throw new Error('Error adding item to shopping list');
  }
}


