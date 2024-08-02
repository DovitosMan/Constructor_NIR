# test_import.py
try:
    import main_calc.apps
    print("Module main_calc.apps is available")
except ImportError as e:
    print("Module main_calc.apps is NOT available")
    print(e)
