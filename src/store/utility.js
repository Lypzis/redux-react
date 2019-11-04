/**
 * Utility function that expects 
 * two objects which have its properties 
 * spread into one object to be returned
 * @param {Object} oldObject An old object
 * @param {Object} updatedValues Object which will join properties with the oldObject
 * @param returns Object
 */
export const updateObject = (oldObject, updatedValues) => {
    return {
        ...oldObject, 
        ...updatedValues
    }
} 