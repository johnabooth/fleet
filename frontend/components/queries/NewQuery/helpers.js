import sqliteParser from 'sqlite-parser';
import { includes, some } from 'lodash';

const BLACKLISTED_ACTIONS = ['insert', 'create'];
const invalidQueryErrorMessage = 'Cannot INSERT or CREATE in osquery queries';
const invalidQueryResponse = (message) => {
  return { valid: false, error: message };
};
const validQueryResponse = { valid: true, error: null };

export const validateQuery = (queryText) => {
  try {
    const ast = sqliteParser(queryText);
    const { statement } = ast;
    const invalidQuery = some(statement, (obj) => {
      return includes(BLACKLISTED_ACTIONS, obj.variant.toLowerCase());
    });

    if (invalidQuery) {
      return invalidQueryResponse(invalidQueryErrorMessage);
    }

    return validQueryResponse;
  } catch (error) {
    return invalidQueryResponse(error.message);
  }
};

export default { validateQuery };