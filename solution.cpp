```cpp
#include <iostream>
#include <future>
#include <vector>

template<typename T>
std::vector<T> promise_all(std::vector<std::future<T>>& futures) {
    std::vector<T> results;
    for(auto& future : futures) {
        results.push_back(future.get());
    }
    return results;
}

int main() {
    std::vector<std::future<int>> futures;
    for(int i = 0; i < 10; ++i) {
        futures.push_back(std::async([i] { return i * i; }));
    }
    std::vector<int> results = promise_all(futures);
    for(auto& result : results) {
        std::cout << result << std::endl;
    }
    return 0;
}
```