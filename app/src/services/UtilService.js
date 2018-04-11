
class UtilService {
  
    clone = (item) => {
        return JSON.parse(JSON.stringify(item)); 
    }
  
}
  
export default new UtilService();