export default {
    SUCCESS: `Operation has been successfull`,
    SOMETHING_WENT_WRONG: `Something went wrong`,
    NOT_FOUND: (entity: string) => `${entity} not found`    // To use NOT_FOUND differently at every place like => NOT_FOUND(flights)
} 